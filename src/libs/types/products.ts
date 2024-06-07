import { gender, productStatus } from "../constants/index.ts";

type Product = {
	brand: string;
	category: string;
	createdAt: Date;
	description: string;
	gender: typeof gender;
	id: string;
	imageUrl: string;
	material: string;
	maxPrice: number;
	minPrice: number;
	name: string;
	quantity: number;
	size: string;
	status: typeof productStatus;
	style: string;
	updatedAt: Date;
};

export { type Product };
