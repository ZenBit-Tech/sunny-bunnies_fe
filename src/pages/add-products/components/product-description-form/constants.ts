import { type OptionType } from "~/pages/add-products/types.ts";

const productDescriptionValidationMessage = {
	MAX_DESCRIPTION_LENGTH: "Description must be less than 500 characters",
	MAX_NAME_LENGTH: "Name must be less than 100 characters",
	MIN_LENGTH_QUANTITY: "Quantity must be at least one",
	REQUIRED_BRAND: "Product brand is required",
	REQUIRED_COLOR: "Product color is required",
	REQUIRED_DESCRIPTION: "Product description is required",
	REQUIRED_GENDER: "Product gender is required",
	REQUIRED_MATERIAL: "Product material is required",
	REQUIRED_NAME: "Product name is required",
	REQUIRED_QUANTITY: "Product quantity is required",
	REQUIRED_SIZE: "Product size is required",
	REQUIRED_VARIANT: "Product variant is required",
};

const productDescriptionRules = {
	MAX_NAME_DESCRIPTION: 100,
	MAX_NAME_LENGTH: 100,
	MIN_QUANTITY: 1,
};

const gendersOptions: OptionType[] = [
	{ label: "Male", value: 1 },
	{ label: "Female", value: 2 },
];

export {
	gendersOptions,
	productDescriptionRules,
	productDescriptionValidationMessage,
};
