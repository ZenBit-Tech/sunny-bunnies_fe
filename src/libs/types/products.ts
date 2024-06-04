const productStatus = {
	BOTH: "both",
	FOR_RENT: "forRent",
	FOR_SALE: "forSale",
} as const;

const gender = {
	FEMALE: "female",
	MALE: "male",
};

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

export { type Product, gender, productStatus };
