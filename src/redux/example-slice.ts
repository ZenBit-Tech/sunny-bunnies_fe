import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
	firstName: string;
	lastName: string;
};

type UserState = {
	list: User[];
};

const initialState: UserState = {
	list: [],
};

const userSlice = createSlice({
	initialState,
	name: "user",
	reducers: {
		addUser(state, action: PayloadAction<User>) {
			state.list.push(action.payload);
		},
	},
});

export const { addUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
