import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
	AddProductVariant,
	ProductCategoryTypeStyle,
	ProductDescription,
	ProductImageDto,
} from "~/pages/add-products/types.ts";

type ProductFormState = {
	productCategory: ProductCategoryTypeStyle;
	productDescription: ProductDescription;
	productImages: ProductImageDto[];
	productVariants: AddProductVariant[];
};

const initialProductFormState: ProductFormState = {
	productCategory: {
		category: null,
		style: null,
		type: null,
	},
	productDescription: {
		brand: null,
		description: "",
		gender: null,
		material: null,
		name: "",
	},
	productImages: [
		{ isPrimary: true, url: "" },
		{ isPrimary: false, url: "" },
		{ isPrimary: false, url: "" },
		{ isPrimary: false, url: "" },
	],
	productVariants: [],
};

const productFormSlice = createSlice({
	initialState: initialProductFormState,
	name: "product-form",
	reducers: {
		addProductVariants: (state, action: PayloadAction<AddProductVariant[]>) => {
			state.productVariants = [...action.payload];
		},
		resetProductForm: (state) => {
			state = { ...state, ...initialProductFormState };
		},
		setPrimaryImage: (state, action: PayloadAction<number>) => {
			state.productImages = state.productImages.map((img, idx) => ({
				...img,
				isPrimary: idx === action.payload,
			}));
			state.productImages[action.payload].isPrimary = true;
		},
		setProductImages: (state, action: PayloadAction<ProductImageDto[]>) => {
			state.productImages = action.payload;
		},
		updateProductCategoryTypeStyle(
			state,
			action: PayloadAction<ProductCategoryTypeStyle>,
		) {
			state.productCategory = { ...state.productCategory, ...action.payload };
		},
		updateProductDescription(state, action: PayloadAction<ProductDescription>) {
			state.productDescription = {
				...state.productDescription,
				...action.payload,
			};
		},
		updateProductImage: (
			state,
			action: PayloadAction<{ image: ProductImageDto; index: number }>,
		) => {
			state.productImages[action.payload.index] = action.payload.image;
		},
	},
});

export const {
	addProductVariants,
	resetProductForm,
	setPrimaryImage,
	setProductImages,
	updateProductCategoryTypeStyle,
	updateProductDescription,
	updateProductImage,
} = productFormSlice.actions;
export const productFormReducer = productFormSlice.reducer;
