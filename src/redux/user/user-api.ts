import { httpMethods } from "~/libs/constants/http-methods.ts";
import { User } from "~/libs/types/user.ts";
import {
	Address,
	CreditCard,
	PhoneNumber,
	Role,
	Size,
} from "~/libs/types/user-profile.type.ts";

import { api } from "../services.ts";
import { userApiPath } from "./constants.ts";

export const userApi = api.injectEndpoints({
	endpoints: (build) => ({
		update: build.mutation<User, Address | PhoneNumber | Role | Size>({
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
		upload: build.mutation<User, FormData>({
			query: (formData: FormData) => ({
				body: formData,
				method: httpMethods.POST,
				url: userApiPath.USER_UPLOAD_AVATAR,
			}),
		}),
	}),
});

export const { useUpdateCardMutation, useUpdateMutation, useUploadMutation } =
	userApi;
