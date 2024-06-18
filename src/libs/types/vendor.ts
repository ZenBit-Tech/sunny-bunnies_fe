import { type Product } from "./products.ts";
import { type User } from "./user.ts";

type Review = {
	id: string;
};

type Vendor = {
	products: Product[];
	reviews: Review[];
} & User;

export { type Review, type Vendor };
