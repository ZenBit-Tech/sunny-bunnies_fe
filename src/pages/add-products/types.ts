import { type Category, type ProductType } from "~/libs/types/products.ts";

type AddProductImage = {
	isPrimary: boolean;
	productImage: File | null | string;
};

type ProductImageDto = {
	isPrimary: boolean;
	url: string;
};

type ProductCategoryTypeStyle = {
	category: null | number;
	style: null | number;
	type: null | number;
};

type CategoryWithTypes = { types: ProductType[] } & Category;

type ProductDescription = {
	brand: null | number;
	description: string;
	gender: null | number;
	material: null | number;
	name: string;
};

type AddProduct = {
	brand: number;
	category: number;
	description: string;
	gender: number;
	images: ProductImageDto[];
	material: number;
	maxPrice: number;
	minPrice: number;
	name: string;
	price?: string;
	productImages: AddProductImage[];
	style: number;
	type: number;
	variants: AddProductVariant[];
};

type AddProductVariant = {
	color: number;
	id: number;
	quantity: number;
	size: number;
};

type OptionType = {
	label: string;
	value: number;
};

type AddProductRequestDto = {
	variants: Omit<AddProductVariant, "id">[];
} & Omit<AddProduct, "variants">;

export {
	type AddProduct,
	type AddProductImage,
	type AddProductRequestDto,
	type AddProductVariant,
	type CategoryWithTypes,
	type OptionType,
	type ProductCategoryTypeStyle,
	type ProductDescription,
	type ProductImageDto,
};
