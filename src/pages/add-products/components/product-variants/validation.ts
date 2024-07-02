import { TFunction } from "i18next";
import * as Yup from "yup";

const productVariantsRules = {
	MAX_QUANTITY: 1000000,
	MIN_QUANTITY: 1,
	MIN_VARIANT: 1,
};

const getProductVariantValidation = (
	t: TFunction<string>,
): Yup.ObjectSchema<{
	variants:
		| {
				color: number;
				quantity: number;
				size: number;
		  }[]
		| undefined;
}> => {
	const productVariantsValidationMessage = {
		MIN_QUANTITY: t("AddProductValidationMessages.minQuantity"),
		MIN_VARIANT: t("AddProductValidationMessages.minVariants"),
		REQUIRED_COLOR: t("AddProductValidationMessages.colorIsRequired"),
		REQUIRED_QUANTITY: t("AddProductValidationMessages.quantityIsRequired"),
		REQUIRED_SIZE: t("AddProductValidationMessages.sizeIsRequired"),
	};

	const productVariantValidation = Yup.object().shape({
		color: Yup.number().required(
			productVariantsValidationMessage.REQUIRED_COLOR,
		),
		quantity: Yup.number()
			.min(
				productVariantsRules.MIN_QUANTITY,
				productVariantsValidationMessage.MIN_QUANTITY,
			)
			.required(productVariantsValidationMessage.REQUIRED_QUANTITY),
		size: Yup.number().required(productVariantsValidationMessage.REQUIRED_SIZE),
	});

	return Yup.object().shape({
		variants: Yup.array()
			.of(productVariantValidation)
			.min(
				productVariantsRules.MIN_VARIANT,
				productVariantsValidationMessage.MIN_VARIANT,
			),
	});
};

export { getProductVariantValidation };
