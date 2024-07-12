import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Category } from "~/libs/types/categories.ts";
import { categoriesApi } from "~/redux/categories/categories-api.ts";

type CategoryState = {
	categories: Category[];
};

const initialState: CategoryState = {
	categories: [],
};

const categoriesSlice = createSlice({
	extraReducers: (builder) => {
		builder.addMatcher(
			categoriesApi.endpoints.getCategories.matchFulfilled,
			(state: CategoryState, action) => {
				state.categories = action.payload;
			},
		);
	},
	initialState,
	name: "category",
	reducers: {
		setCategories: (state, action: PayloadAction<Category[]>) => {
			state.categories = action.payload;
		},
	},
});

export const categoryReducer = categoriesSlice.reducer;
