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

type Category = {
	id: number;
	name: string;
};

type Color = {
	id: number;
	name: string;
};

type Size = {
	id: number;
	name: string;
};

type ProductType = {
	id: number;
	name: string;
};

type ProductStyle = {
	id: number;
	name: string;
};

type ProductBrand = {
	id: number;
	name: string;
};

type ProductMaterial = {
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

export {
	type Category,
	type Color,
	type Product,
	type ProductBrand,
	type ProductImage,
	type ProductMaterial,
	type ProductSize,
	type ProductStyle,
	type ProductType,
	type ProductVariant,
	type Size,
};
