import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { httpStatusCode } from "~/libs/enum/http-status-code.ts";

import { logout, setUser } from "../auth/auth-slice.ts";
import { RootState } from "../store.ts";
import { type AuthTokenResponse } from "../user/types/index.ts";

const baseQuery = fetchBaseQuery({
	baseUrl: `${import.meta.env.VITE_APP_PROXY_SERVER_URL}`,
	credentials: "include",
	mode: "cors",
	prepareHeaders: (headers, { getState }) => {
		const { token } = (getState() as RootState).auth;
		if (token) headers.set("authorization", `Bearer ${token}`);

		return headers;
	},
});

const baseQueryWithReauth: BaseQueryFn<
    FetchArgs | string,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const refreshToken = localStorage.getItem("refreshToken");
    try {
        let result = await baseQuery(args, api, extraOptions);

        if (
            result.error &&
            result.error.status === httpStatusCode.UNAUTHORIZED &&
            refreshToken
        ) {
            const refreshResult = await baseQuery(
                {
                    body: { refreshToken: refreshToken },
                    method: "POST",
                    url: "auth/refresh-token",
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
