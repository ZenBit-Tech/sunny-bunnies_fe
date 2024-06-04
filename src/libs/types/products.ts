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
	name: string;
	priceFrom: number;
	priceTo: number;
	quantity: number;
	size: string;
	status: typeof productStatus;
	style: string;
	updatedAt: Date;
};

export { type Product };
