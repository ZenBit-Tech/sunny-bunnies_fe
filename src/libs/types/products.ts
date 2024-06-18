import { gender } from "../constants/index.ts";
import { type User } from "./user.ts";

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
	status: string;
	style: string;
	updatedAt: Date;
	user: User;
	variants: ProductVariant[];
};

export {
	type Product,
	type ProductImage,
	type ProductSize,
	type ProductVariant,
};
