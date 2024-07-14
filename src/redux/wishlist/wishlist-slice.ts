import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "~/libs/types/products.ts";

import { arrayIndex } from "./constants.ts";

type WishlistState = {
	fullWishlist: Product[];
	products: Product[];
};

const initialState: WishlistState = {
	fullWishlist: [],
	products: [],
};

const wishlistSlice = createSlice({
	initialState,
	name: "wishlist",
	reducers: {
		addProductToWishlist(state, action: PayloadAction<Product>) {
			const index = state.products.findIndex(
				(product) => product.id === action.payload.id,
			);
			if (index >= arrayIndex.ZERO) {
				state.products.splice(index, arrayIndex.ONE);
			} else {
				state.products.push(action.payload);
			}
		},
		setFullWishlist(state, action: PayloadAction<Product[]>) {
			state.fullWishlist = action.payload;
		},
		setWishlist(state, action: PayloadAction<Product[]>) {
			state.products = action.payload;
		},
	},
});

export const { addProductToWishlist, setFullWishlist, setWishlist } =
	wishlistSlice.actions;

export const wishlistReducer = wishlistSlice.reducer;
