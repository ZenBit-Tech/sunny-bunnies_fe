import { httpMethods } from "~/libs/enum/http-methods.ts";

import { api } from "../services/index.ts";
import {
	type UserSignInRequestDto,
	type UserSignInResponseDto,
	type UserSignUpRequestDto,
	type UserSignUpResponseDto,
} from "../user/types/index.ts";
import { authApiPath } from "./constants/auth-api-path.ts";

export const authApi = api.injectEndpoints({
	endpoints: (build) => ({
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

export const { useLoginMutation, useRegisterMutation } = authApi;
