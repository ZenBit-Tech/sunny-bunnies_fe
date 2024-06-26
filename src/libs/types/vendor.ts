import { type Product } from "./products.ts";
import { type User } from "./user.ts";

type Review = {
	createdAt: Date;
	id: string;
	rating: null | string;
	review: string;
	reviewUser: User;
	updatedAt: Date;
};

type Vendor = {
	averageRating: number;
	products: Product[];
	reviewsReceived: Review[];
} & User;

export { type Review, type Vendor };
