import { CredentialResponse } from "@react-oauth/google";

import { httpMethods } from "~/libs/constants/http-methods.ts";
import {
	type User,
	type UserResetPasswordRequestDto,
	type UserRestorePasswordRequestDto,
	type UserSignInRequestDto,
	type UserSignInResponseDto,
	type UserSignUpRequestDto,
	type UserSignUpResponseDto,
	type UserVerifyEmailRequestDto,
	type UserVerifyOtpRequestDto,
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
		resetPassword: build.mutation<void, UserResetPasswordRequestDto>({
			query: (body) => ({
				body,
				method: httpMethods.POST,
				url: authApiPath.RESET_PASSWORD,
			}),
		}),
		restorePassword: build.mutation<void, UserRestorePasswordRequestDto>({
			query: (body) => ({
				body,
				method: httpMethods.POST,
				url: authApiPath.RESTORE_PASSWORD,
			}),
		}),
		verifyEmail: build.mutation<void, UserVerifyEmailRequestDto>({
			query: (body) => ({
				body,
				method: httpMethods.POST,
				url: authApiPath.VERIFY_EMAIL,
			}),
		}),
		verifyOtp: build.mutation<void, UserVerifyOtpRequestDto>({
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
	useLoginByGoogleMutation,
	useLoginMutation,
	useRegisterMutation,
	useResetPasswordMutation,
	useRestorePasswordMutation,
	useVerifyEmailMutation,
	useVerifyOtpMutation,
} = authApi;
