import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { storage, storageKey } from "~/libs/helpers/storage.ts";

import { type User, type UserSignInResponseDto } from "../user/types/index.ts";

type AuthState = {
	user: User | null;
};

const authSlice = createSlice({
	initialState: {
		user: null,
	} as AuthState,
	name: "auth",
	reducers: {
		logout: (state) => {
			storage.drop(storageKey.ACCESS_TOKEN);
			storage.drop(storageKey.REFRESH_TOKEN);
			state.user = null;
		},
		setUser: (state, action: PayloadAction<UserSignInResponseDto>) => {
			storage.set(storageKey.ACCESS_TOKEN, action.payload.accessToken);
			storage.set(storageKey.REFRESH_TOKEN, action.payload.refreshToken);
			state.user = action.payload.user;
		},
	},
});

export const { logout, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
