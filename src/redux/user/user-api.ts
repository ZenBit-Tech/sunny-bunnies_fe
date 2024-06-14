import { httpMethods } from "~/libs/constants/http-methods.ts";
import { User } from "~/libs/types/user.ts";
import {
	Address,
	CreditCard,
	GeneralInformation,
	Role,
	Size,
} from "~/libs/types/user-profile.type.ts";

import { api } from "../services.ts";
import { userApiPath } from "./constants.ts";

export const userApi = api.injectEndpoints({
	endpoints: (build) => ({
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

export const { useUpdateMutation } = userApi;
