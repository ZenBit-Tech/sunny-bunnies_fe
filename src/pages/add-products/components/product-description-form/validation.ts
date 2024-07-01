import * as Yup from "yup";

import {
	productDescriptionRules,
	productDescriptionValidationMessage,
} from "./constants.ts";

const productDescriptionValidation = Yup.object().shape({
	brand: Yup.number().required(
		productDescriptionValidationMessage.REQUIRED_BRAND,
	),
	description: Yup.string()
		.max(
			productDescriptionRules.MAX_NAME_DESCRIPTION,
			productDescriptionValidationMessage.MAX_DESCRIPTION_LENGTH,
		)
		.required(productDescriptionValidationMessage.REQUIRED_DESCRIPTION),
	gender: Yup.number().required(
		productDescriptionValidationMessage.REQUIRED_GENDER,
	),
	material: Yup.number().required(
		productDescriptionValidationMessage.REQUIRED_MATERIAL,
	),
	name: Yup.string()
		.max(
			productDescriptionRules.MAX_NAME_LENGTH,
			productDescriptionValidationMessage.MAX_NAME_LENGTH,
		)
		.required(productDescriptionValidationMessage.REQUIRED_NAME),
});

export { productDescriptionValidation };
