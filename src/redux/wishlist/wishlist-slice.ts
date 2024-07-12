import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "~/libs/types/products.ts";

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
			state.products.push(action.payload);
		},
		setFullWishlist(state, action: PayloadAction<Product[]>) {
			state.fullWishlist = action.payload;
		},
		setWishlist(state, action: PayloadAction<WishlistState>) {
			state.products = action.payload.products;
		},
	},
});

export const { addProductToWishlist, setFullWishlist, setWishlist } =
	wishlistSlice.actions;

export const wishlistReducer = wishlistSlice.reducer;
