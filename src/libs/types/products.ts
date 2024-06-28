import { gender } from "../constants/index.ts";
import { type User } from "./user.ts";

type AddProductImage = {
	isPrimary: boolean;
	productImage: File | null | string;
};

type ProductImageDto = {
	isPrimary: boolean;
	productImage: string;
};

type ProductSize = {
	id: number;
	name: string;
};

type ProductImage = {
	createdAt: Date;
	description: string;
	id: number;
	url: string;
};

type Color = {
	id: number;
	name: string;
};

type Size = {
	id: number;
	name: string;
};

type ProductVariant = {
	color: Color;
	id: number;
	quantity: number;
	size: Size;
};

type Product = {
	brand: string;
	category: string;
	createdAt: Date;
	description: string;
	gender: typeof gender;
	id: string;
	images: ProductImage[];
	material: string;
	maxPrice: number;
	minPrice: number;
	name: string;
	quantity: number;
	status: string;
	style: string;
	updatedAt: Date;
	user: User;
	variants: ProductVariant[];
};

type ProductCategoryTypeStyle = {
	category: null | number;
	style: null | number;
	type: null | number;
};

export {
	type AddProductImage,
	type Product,
	type ProductCategoryTypeStyle,
	type ProductImage,
	type ProductImageDto,
	type ProductSize,
	type ProductVariant,
};
