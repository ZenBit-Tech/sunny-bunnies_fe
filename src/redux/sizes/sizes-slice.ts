import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Size } from "~/libs/types/categories.ts";

import { sizesApi } from "./sizes-api.ts";

type SizeState = {
	sizes: Size[];
};

const initialState: SizeState = {
	sizes: [],
};

const sizesSlice = createSlice({
	extraReducers: (builder) => {
		builder.addMatcher(
			sizesApi.endpoints.getSizes.matchFulfilled,
			(state: SizeState, action) => {
				state.sizes = action.payload;
			},
		);
	},
	initialState,
	name: "sizes",
	reducers: {
		setSizes: (state, action: PayloadAction<Size[]>) => {
			state.sizes = action.payload;
		},
	},
});

export const { setSizes } = sizesSlice.actions;
export const sizeReducer = sizesSlice.reducer;
