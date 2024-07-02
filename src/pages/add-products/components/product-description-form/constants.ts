import { type OptionType } from "~/pages/add-products/types.ts";

const productDescriptionRules = {
	MAX_NAME_DESCRIPTION: 100,
	MAX_NAME_LENGTH: 100,
	MIN_QUANTITY: 1,
};

const gendersOptions: OptionType[] = [
	{ label: "Male", value: 1 },
	{ label: "Female", value: 2 },
];

export { gendersOptions, productDescriptionRules };
