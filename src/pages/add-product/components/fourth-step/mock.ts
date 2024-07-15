import { Color, Size } from "~/libs/types/products.ts";

const colors: Color[] = [
	{ id: 1, name: "Red" },
	{ id: 2, name: "Orange" },
	{ id: 3, name: "Yellow" },
	{ id: 4, name: "Green" },
	{ id: 5, name: "Blue" },
	{ id: 6, name: "White" },
	{ id: 7, name: "Black" },
];

const clothingSizes: Size[] = [
	{ id: 1, name: "4XS" },
	{ id: 2, name: "3XS" },
	{ id: 3, name: "XXS" },
	{ id: 4, name: "XS" },
	{ id: 5, name: "S" },
	{ id: 6, name: "M" },
	{ id: 7, name: "L" },
	{ id: 8, name: "XL" },
	{ id: 9, name: "XXL" },
	{ id: 10, name: "XXXL" },
];

const shoeSizes: Size[] = [
	{ id: 1, name: "3.0" },
	{ id: 2, name: "3.5" },
	{ id: 3, name: "4.0" },
	{ id: 4, name: "4.5" },
	{ id: 5, name: "5.0" },
	{ id: 6, name: "5.5" },
	{ id: 7, name: "6.0" },
	{ id: 8, name: "6.5" },
	{ id: 9, name: "7.0" },
	{ id: 10, name: "7.5" },
	{ id: 11, name: "8.0" },
	{ id: 12, name: "8.5" },
	{ id: 13, name: "9.0" },
	{ id: 14, name: "9.5" },
	{ id: 15, name: "10.0" },
	{ id: 16, name: "10.5" },
	{ id: 17, name: "11.0" },
	{ id: 18, name: "11.5" },
];

const sizes = (isShoes: boolean): Size[] => {
	if (isShoes) {
		return shoeSizes;
	} else {
		return clothingSizes;
	}
};

export { colors, sizes };
