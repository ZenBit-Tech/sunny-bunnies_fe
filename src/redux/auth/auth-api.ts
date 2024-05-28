import { api } from "../services/index.ts";
import {
	type UserSignUpRequestDto,
	type UserSignUpResponseDto,
} from "../user/types/index.ts";

export const authApi = api.injectEndpoints({
	endpoints: (build) => ({
		register: build.mutation<UserSignUpResponseDto, UserSignUpRequestDto>({
			query: (body) => ({
				body,
				method: "POST",
				url: "/auth/register",
			}),
		}),
	}),
});

export const { useRegisterMutation } = authApi;
