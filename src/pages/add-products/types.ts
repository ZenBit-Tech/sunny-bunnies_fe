import { AddProductImage, ProductVariant } from "~/libs/types/products.ts";

type AddProductRequestDto = {
	brand: number;
	category: number;
	material: number;
	productImages: AddProductImage[];
	style: number;
	type: number;
	variants: ProductVariant[];
};

export { type AddProductRequestDto };
