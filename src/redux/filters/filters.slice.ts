import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type FilterItem } from "~/libs/types/filters.ts";

type FiltersState = {
	brands: FilterItem[] | null;
	categories: FilterItem[] | null;
	colors: FilterItem[] | null;
	materials: FilterItem[] | null;
	sizes: FilterItem[] | null;
	styles: FilterItem[] | null;
};

const initialState: FiltersState = {
	brands: null,
	categories: null,
	colors: null,
	materials: null,
	sizes: null,
	styles: null,
};

const filtersSlice = createSlice({
	initialState,
	name: "filters",
	reducers: {
		setFilters: (state, action: PayloadAction<FiltersState>) => {
			return { ...state, ...action.payload };
		},
	},
});

export const { setFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
