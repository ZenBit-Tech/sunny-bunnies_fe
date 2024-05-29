import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { httpMethods } from "~/libs/enum/http-methods.ts";
import { httpStatusCode } from "~/libs/enum/http-status-code.ts";

import { logout, setUser } from "../auth/auth-slice.ts";
import { authApiPath } from "../auth/constants/auth-api-path.ts";
import { RootState } from "../store.ts";
import { type AuthTokenResponse } from "../user/types/index.ts";

const baseQuery = fetchBaseQuery({
	baseUrl: `${import.meta.env.VITE_APP_PROXY_SERVER_URL}`,
	mode: "cors",
	prepareHeaders: (headers, { getState }) => {
		const state = getState() as RootState;
		const token = state.auth.accessToken;

		if (token) headers.set("authorization", `Bearer ${token}`);

		return headers;
	},
});

const baseQueryWithReauth: BaseQueryFn<
	FetchArgs | string,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	const state = api.getState() as RootState;
	const { refreshToken } = state.auth;

	try {
		let result = await baseQuery(args, api, extraOptions);

		if (
			result.error &&
			result.error.status === httpStatusCode.UNAUTHORIZED &&
			refreshToken
		) {
			const refreshResult = await baseQuery(
				{
					body: { refreshToken },
					method: httpMethods.POST,
					url: authApiPath.REFRESH_TOKEN,
				},
				api,
				extraOptions,
			);

			if (refreshResult.data) {
				const data = refreshResult.data as AuthTokenResponse;
				api.dispatch(setUser(data));
				result = await baseQuery(args, api, extraOptions);
			} else {
				api.dispatch(logout());
			}
		}

		return result;
	} catch (error) {
		return { error: error as FetchBaseQueryError };
	}
};

export const api = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: () => ({}),
	reducerPath: "api",
	tagTypes: ["User"],
});
