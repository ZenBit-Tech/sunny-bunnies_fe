import { httpMethods } from "~/libs/enum/http-methods.ts";

import { api } from "../services/index.ts";
import {
	type User,
	type UserSignInRequestDto,
	type UserSignInResponseDto,
	type UserSignUpRequestDto,
	type UserSignUpResponseDto,
} from "../user/types/index.ts";
import { authApiPath } from "./constants/auth-api-path.ts";

export const authApi = api.injectEndpoints({
	endpoints: (build) => ({
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
		register: build.mutation<UserSignUpResponseDto, UserSignUpRequestDto>({
			query: (body) => ({
				body,
				method: httpMethods.POST,
				url: authApiPath.SIGN_UP,
			}),
		}),
	}),
});

export const { useGetUserQuery, useLoginMutation, useRegisterMutation } =
	authApi;
