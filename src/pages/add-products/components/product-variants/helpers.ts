import { type Color, type Size } from "~/libs/types/products.ts";

const getColorName = (colors: Color[], colorId: number): string => {
	const color = colors?.find((color) => color.id === colorId);

	return color ? color.name : "";
};

const getSizeName = (sizes: Size[], sizeId: number): string => {
	const size = sizes?.find((size) => size.id === sizeId);

	return size ? size.name : "";
};

export { getColorName, getSizeName };
