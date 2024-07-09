import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "~/libs/types/user.ts";

type AdminState = {
	users: User[];
};

const initialState: AdminState = {
	users: [],
};

const adminSlice = createSlice({
	initialState,
	name: "admin",
	reducers: {
		setUsers(state, action: PayloadAction<User[]>) {
			state.users = action.payload;
		},
	},
});

export const { setUsers } = adminSlice.actions;
export const adminReducer = adminSlice.reducer;
