import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type RequestDto = {
	email: string;
	password: string;
};

type ResponseDto = {
	email: string;
	id: string;
	isActivated: boolean;
};

type Token = {
	token: string;
};

const baseUrl: string = import.meta.env.VITE_BASE_URL || "";

export const authApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),
	endpoints: (build) => ({
		login: build.mutation({
			query: (body: RequestDto) => ({
				body,
				method: "POST",
				url: "login",
			}),
		}),
		loginWithGoogle: build.mutation<ResponseDto, Token>({
			query: (body: Token) => ({
				body,
				method: "POST",
				url: "google/login",
			}),
		}),
	}),
	reducerPath: "auth/api",
	refetchOnFocus: true,
});

export const { useLoginMutation, useLoginWithGoogleMutation } = authApi;
