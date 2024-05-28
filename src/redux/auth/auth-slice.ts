import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type User, type UserSignInResponseDto } from "../user/types/index.ts";

type AuthState = {
	accessToken: null | string;
	refreshToken: null | string;
	user: User | null;
};

const initialState: AuthState = {
	accessToken: null,
	refreshToken: null,
	user: null,
};

const authSlice = createSlice({
	initialState,
	name: "auth",
	reducers: {
		logout: (state) => {
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;
		},
		setUser: (state, action: PayloadAction<UserSignInResponseDto>) => {
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
		},
	},
});

export const { logout, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
