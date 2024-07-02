import { TFunction } from "i18next";
import * as Yup from "yup";

import { getCategoryTypeStyleValidation } from "../product-category-and-type/validation.ts";
import { getProductDescriptionValidation } from "../product-description-form/validation.ts";
import { getProductImagesValidation } from "../product-images/validation.ts";
import { getProductVariantValidation } from "../product-variants/validation.ts";

const getProductPriceValidation = (
	t: TFunction,
): Yup.StringSchema<string | undefined, Record<string, unknown>> => {
	const productDetailsValidationMessage = {
		INVALID_FORMAT: t("AddProductValidationMessages.incorrectPriceFormat"),
		INVALID_RANGE: t("AddProductValidationMessages.invalidPriceRange"),
		REQUIRED_PRICE: t("AddProductValidationMessages.priceIsRequired"),
	};

	return Yup.string()
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
};

const getFinalProductValidation = (
	t: TFunction,
): Yup.ObjectSchema<Record<string, unknown>> => {
	const productDetailsValidationMessage = {
		REQUIRED_PRICE: t("AddProductValidationMessages.priceIsRequired"),
	};

	return Yup.object().shape({
		...getCategoryTypeStyleValidation(t).fields,
		...getProductDescriptionValidation(t).fields,
		...getProductImagesValidation(t).fields,
		...getProductVariantValidation(t).fields,
		price: getProductPriceValidation(t).required(
			productDetailsValidationMessage.REQUIRED_PRICE,
		),
	});
};

export { getFinalProductValidation };
