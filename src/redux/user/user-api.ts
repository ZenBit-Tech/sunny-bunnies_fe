import { httpMethods } from "~/libs/constants/http-methods.ts";
import { User } from "~/libs/types/user.ts";
import {
	Address,
	CreditCard,
	GeneralInformation,
	Profile,
	Role,
	Size,
} from "~/libs/types/user-profile.type.ts";

import { api } from "../services.ts";
import { userApiPath } from "./constants.ts";

export const userApi = api.injectEndpoints({
	endpoints: (build) => ({
		update: build.mutation<User, Address | GeneralInformation | Role | Size>({
			query: (body) => ({
				body,
				method: httpMethods.PATCH,
				url: userApiPath.USER_UPDATE_PROFILE,
			}),
		}),
		updateCard: build.mutation<User, CreditCard>({
			query: (body) => ({
				body,
				method: httpMethods.PATCH,
				url: userApiPath.USER_UPDATE_CARD,
			}),
		}),
		updateUserAndProfile: build.mutation<User, Profile>({
			query: (body) => ({
				body,
				method: httpMethods.PATCH,
				url: userApiPath.USER_UPDATE_USER_AND_PROFILE,
			}),
		}),
	}),
});

export const {
	useUpdateCardMutation,
	useUpdateMutation,
	useUpdateUserAndProfileMutation,
} = userApi;
