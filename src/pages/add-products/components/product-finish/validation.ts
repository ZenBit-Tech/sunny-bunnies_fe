import * as Yup from "yup";

import { categoryTypeStyleValidation } from "../product-category-and-type/validation.ts";
import { productDescriptionValidation } from "../product-description-form/validation.ts";

const productDetailsValidationMessage = {
	INVALID_FORMAT: "Price must be in the format 'min-max', e.g., '100-200'",
	INVALID_RANGE: "Invalid price range. Minimum must be less than maximum",
	REQUIRED_PRICE: "Price is required",
};

const productPriceValidation = Yup.string()
	.test(
		"price-range",
		productDetailsValidationMessage.INVALID_FORMAT,
		(value) => {
			if (!value) return false;
			const regex = /^\d+-\d+$/;

			return regex.test(value);
		},
	)
	.test(
		"price-values",
		productDetailsValidationMessage.INVALID_RANGE,
		(value) => {
			if (!value) return false;

			const [minPrice, maxPrice] = value.split("-").map(Number);

			return minPrice <= maxPrice;
		},
	);

const finalProductValidation = Yup.object().shape({
	...categoryTypeStyleValidation.fields,
	...productDescriptionValidation.fields,
	price: productPriceValidation.required(
		productDetailsValidationMessage.REQUIRED_PRICE,
	),
});

export { finalProductValidation };
