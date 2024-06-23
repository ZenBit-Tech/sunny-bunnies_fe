import { CredentialResponse } from "@react-oauth/google";

import { httpMethods } from "~/libs/constants/http-methods.ts";
import {
	type User,
	type UserSignInRequestDto,
	type UserSignInResponseDto,
	type UserSignUpRequestDto,
	type UserSignUpResponseDto,
	type UserVerifyEmailRequestDto,
	type UserVerifyOtpReuestDto,
} from "~/libs/types/user.ts";

import { api } from "../services.ts";
import { authApiPath, userApiPath } from "./constants.ts";

export const authApi = api.injectEndpoints({
	endpoints: (build) => ({
		addUserGoogle: build.mutation<UserSignUpResponseDto, CredentialResponse>({
			query: (post) => ({
				body: post,
				method: httpMethods.POST,
				url: authApiPath.GOOGLE,
			}),
		}),
		adminLogin: build.mutation<UserSignInResponseDto, UserSignInRequestDto>({
			query: (body) => ({
				body,
				method: httpMethods.POST,
				url: authApiPath.ADMIN_SIGN_IN,
			}),
		}),
		getUser: build.query<User, undefined>({
			query: () => ({
				method: httpMethods.GET,
				url: userApiPath.USER,
			}),
		}),
		login: build.mutation<UserSignInResponseDto, UserSignInRequestDto>({
			query: (body) => ({
				body,
				method: httpMethods.POST,
				url: authApiPath.SIGN_IN,
			}),
		}),
		register: build.mutation<UserSignUpResponseDto, UserSignUpRequestDto>({
			query: (body) => ({
				body,
				method: httpMethods.POST,
				url: authApiPath.SIGN_UP,
			}),
		}),
		verifyEmail: build.mutation<void, UserVerifyEmailRequestDto>({
			query: (body) => ({
				body,
				method: httpMethods.POST,
				url: authApiPath.VERIFY_EMAIL,
			}),
		}),
		verifyOtp: build.mutation<User, UserVerifyOtpReuestDto>({
			query: (body) => ({
				body,
				method: httpMethods.POST,
				url: authApiPath.VERIFY_OTP,
			}),
		}),
	}),
});

export const {
	useAddUserGoogleMutation,
	useAdminLoginMutation,
	useGetUserQuery,
	useLoginMutation,
	useRegisterMutation,
	useVerifyEmailMutation,
	useVerifyOtpMutation,
} = authApi;
