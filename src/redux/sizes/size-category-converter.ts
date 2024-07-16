type Category = "Accessories" | "Bags" | "Clothing" | "Designers" | "Shoes";
type SizeType = "clothing" | "no_size" | "shoes";

const sizeCategoryMapping: Record<Category, SizeType> = {
	Accessories: "no_size",
	Bags: "no_size",
	Clothing: "clothing",
	Designers: "clothing",
	Shoes: "shoes",
};

export const sizeCategoryConverter = (category: string): SizeType => {
	if (category in sizeCategoryMapping) {
		return sizeCategoryMapping[category as Category];
	}

	return "clothing";
};
