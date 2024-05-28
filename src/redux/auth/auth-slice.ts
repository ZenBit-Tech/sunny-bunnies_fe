import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type User, type UserSignInResponseDto } from "../user/types/index.ts";

type AuthState = {
	token: null | string;
	user: User | null;
};

const authSlice = createSlice({
	initialState: {
		token: localStorage.getItem("token") || null,
		user: null,
	} as AuthState,
	name: "auth",
	reducers: {
		logout: (state) => {
			localStorage.clear();
			state.user = null;
			state.token = null;
		},
		setUser: (state, action: PayloadAction<UserSignInResponseDto>) => {
			localStorage.setItem("token", action.payload.accessToken);
			localStorage.setItem("refreshToken", action.payload.refreshToken);
			state.user = action.payload.user;
			state.token = action.payload.accessToken;
		},
	},
});

export const { logout, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
