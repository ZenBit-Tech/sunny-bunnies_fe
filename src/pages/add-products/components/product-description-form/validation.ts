import { TFunction } from "i18next";
import * as Yup from "yup";

import { productDescriptionRules } from "./constants.ts";

const getProductDescriptionValidation = (
	t: TFunction<string>,
): Yup.ObjectSchema<{
	brand: number;
	description: string;
	gender: number;
	material: number;
	name: string;
}> => {
	const productDescriptionValidationMessage = {
		MAX_DESCRIPTION_LENGTH: t(
			"AddProductValidationMessages.maxDescriptionLength",
		),
		MAX_NAME_LENGTH: t("AddProductValidationMessages.maxNameLength"),
		REQUIRED_BRAND: t("AddProductValidationMessages.productBrandIsRequired"),
		REQUIRED_DESCRIPTION: t(
			"AddProductValidationMessages.productDescriptionIsRequired",
		),
		REQUIRED_GENDER: t("AddProductValidationMessages.productGenderIsRequired"),
		REQUIRED_MATERIAL: t(
			"AddProductValidationMessages.productMaterialIsRequired",
		),
		REQUIRED_NAME: t("AddProductValidationMessages.productNameIsRequired"),
	};

	return Yup.object().shape({
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
};

export { getProductDescriptionValidation };
