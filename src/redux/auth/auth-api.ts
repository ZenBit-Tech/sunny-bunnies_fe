import { CredentialResponse } from "@react-oauth/google";

import { httpMethods } from "~/libs/enum/http-methods.ts";

import { api } from "../services/index.ts";
import {
	type UserSignUpRequestDto,
	type UserSignUpResponseDto,
} from "../user/types/index.ts";
import { authApiPath } from "./constants/auth-api-path.ts";

export const authApi = api.injectEndpoints({
	endpoints: (build) => ({
		addUserGoogle: build.mutation<UserSignUpResponseDto, CredentialResponse>({
			query: (post) => ({
				body: post,
				method: httpMethods.POST,
				url: authApiPath.GOOGLE,
			}),
		}),
		register: build.mutation<UserSignUpResponseDto, UserSignUpRequestDto>({
			query: (body) => ({
				body,
				method: httpMethods.POST,
				url: authApiPath.SIGN_UP,
			}),
		}),
	}),
});

export const { useAddUserGoogleMutation, useRegisterMutation } = authApi;
