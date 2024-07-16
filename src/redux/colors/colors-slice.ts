import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Color } from "~/libs/types/categories.ts";

import { colorsApi } from "./colors-api.ts";

type ColorState = {
	colors: Color[];
};

const initialState: ColorState = {
	colors: [],
};

const colorsSlice = createSlice({
	extraReducers: (builder) => {
		builder.addMatcher(
			colorsApi.endpoints.getColors.matchFulfilled,
			(state: ColorState, action) => {
				state.colors = action.payload;
			},
		);
	},
	initialState,
	name: "colors",
	reducers: {
		setColors: (state, action: PayloadAction<Color[]>) => {
			state.colors = action.payload;
		},
	},
});

export const { setColors } = colorsSlice.actions;
export const colorReducer = colorsSlice.reducer;
