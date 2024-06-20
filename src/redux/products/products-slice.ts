import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type Product } from "~/libs/types/products.ts";

type ProductsState = {
	products: Product[] | null;
	productsByName: Product[] | null;
};

const initialState: ProductsState = {
	products: null,
	productsByName: null,
};

const productsSlice = createSlice({
	initialState,
	name: "products",
	reducers: {
		setProducts: (state, action: PayloadAction<Product[]>) => {
			state.products = action.payload;
		},
		setProductsByName: (state, action: PayloadAction<Product[]>) => {
			state.productsByName = action.payload;
		},
	},
});

export const { setProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
