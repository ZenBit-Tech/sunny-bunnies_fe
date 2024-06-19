import { httpMethods } from "~/libs/constants/http-methods.ts";
import { User } from "~/libs/types/user.ts";
import {
	Address,
	CreditCard,
	GeneralInformation,
	Role,
	Size,
} from "~/libs/types/user-profile.type.ts";
import { Vendor } from "~/libs/types/vendor.ts";

import { api } from "../services.ts";
import { userApiPath } from "./constants.ts";

export const userApi = api.injectEndpoints({
	endpoints: (build) => ({
		checkFollowStatus: build.query<boolean, { userId: string }>({
			query: ({ userId }) => ({
				method: httpMethods.GET,
				url: `${userApiPath.CHECK_FOLLOW_STATUS}/${userId}`,
			}),
		}),
		follow: build.mutation<User, { userId: string }>({
			query: ({ userId }) => ({
				method: httpMethods.POST,
				url: `${userApiPath.USER_FOLLOW}/${userId}`,
			}),
		}),
		getVendorById: build.query<Vendor, string | undefined>({
			query: (id: string) => ({
				method: httpMethods.GET,
				url: `${userApiPath.VENDOR}/${id}`,
			}),
		}),
		unFollow: build.mutation<User, { userId: string }>({
			query: ({ userId }) => ({
				method: httpMethods.DELETE,
				url: `${userApiPath.USER_FOLLOW}/${userId}`,
			}),
		}),
		update: build.mutation<User, Address | GeneralInformation | Role | Size>({
			query: (body) => ({
				body,
				method: httpMethods.PATCH,
				url: userApiPath.USER_UPDATE,
			}),
		}),
		updateCard: build.mutation<User, CreditCard>({
			query: (body) => ({
				body,
				method: httpMethods.PATCH,
				url: userApiPath.USER_UPDATE_CARD,
			}),
		}),
	}),
});

export const {
	useCheckFollowStatusQuery,
	useFollowMutation,
	useGetVendorByIdQuery,
	useUnFollowMutation,
	useUpdateCardMutation,
	useUpdateMutation,
} = userApi;
