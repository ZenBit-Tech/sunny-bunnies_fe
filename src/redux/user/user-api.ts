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
		getById: build.query<User, string | undefined>({
			query: (id: string) => ({
				method: httpMethods.GET,
				url: `${userApiPath.USERS}/${id}`,
			}),
		}),
		getVendorById: build.query<Vendor, string | undefined>({
			query: (id: string) => ({
				method: httpMethods.GET,
				url: `${userApiPath.VENDOR}/${id}`,
			}),
		}),
		update: build.mutation<
			User,
			Address | CreditCard | GeneralInformation | Role | Size
		>({
			query: (body) => ({
				body,
				method: httpMethods.PATCH,
				url: userApiPath.USER_UPDATE,
			}),
		}),
	}),
});

export const { useGetByIdQuery, useGetVendorByIdQuery, useUpdateMutation } =
	userApi;
