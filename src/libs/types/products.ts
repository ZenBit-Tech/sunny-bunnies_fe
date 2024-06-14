import { gender } from "../constants/index.ts";

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
	colors: string[];
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
	sizes: string[];
	status: string;
	style: string;
	updatedAt: Date;
	variants: ProductVariant[];
};

export {
	type Product,
	type ProductImage,
	type ProductSize,
	type ProductVariant,
};
