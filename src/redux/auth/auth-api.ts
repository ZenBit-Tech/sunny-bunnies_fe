import { CredentialResponse } from "@react-oauth/google";

import { httpMethods } from "~/libs/constants/http-methods.ts";
import {
	type User,
	type UserSignInRequestDto,
	type UserSignInResponseDto,
	type UserSignUpRequestDto,
	type UserSignUpResponseDto,
} from "~/libs/types/user.ts";

import { api } from "../services.ts";
import { authApiPath } from "./constants.ts";

export const authApi = api.injectEndpoints({
	endpoints: (build) => ({
		addUserGoogle: build.mutation<UserSignUpResponseDto, CredentialResponse>({
			query: (post) => ({
				body: post,
				method: httpMethods.POST,
				url: authApiPath.GOOGLE,
			}),
		}),
		getUser: build.query<User, undefined>({
			query: () => ({
				method: httpMethods.GET,
				url: authApiPath.USER,
			}),
		}),
		login: build.mutation<UserSignInResponseDto, UserSignInRequestDto>({
			query: (body) => ({
				body,
				method: httpMethods.POST,
				url: authApiPath.SIGN_IN,
			}),
		}),
		loginByGoogle: build.mutation<UserSignInResponseDto, CredentialResponse>({
			query: (post) => ({
				body: post,
				method: httpMethods.POST,
				url: authApiPath.GOOGLE_LOGIN,
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

export const {
	useAddUserGoogleMutation,
	useGetUserQuery,
	useLoginByGoogleMutation,
	useLoginMutation,
	useRegisterMutation,
} = authApi;
