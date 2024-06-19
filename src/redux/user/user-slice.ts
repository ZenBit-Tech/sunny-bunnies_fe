import { createSlice } from "@reduxjs/toolkit";

type UserState = Record<string, never>;

const initialState: UserState = {};

const userSlice = createSlice({
	initialState,
	name: "user",
	reducers: {},
});

export const userReducer = userSlice.reducer;
