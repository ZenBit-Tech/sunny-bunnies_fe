import { t } from "i18next";
import * as yup from "yup";

const maxNumberOfCharsForProductName = 20;
const thirdStepValidation = yup.object().shape({
	brand: yup
		.string()
		.required(t("AddProductValidationMessages.productBrandIsRequired"))
		.nullable()
		.required(t("AddProductValidationMessages.productBrandIsRequired")),
	description: yup
		.string()
		.required(t("AddProductValidationMessages.productDescriptionIsRequired"))
		.nullable()
		.required(t("AddProductValidationMessages.productDescriptionIsRequired")),
	material: yup
		.string()
		.required(t("AddProductValidationMessages.productMaterialIsRequired"))
		.nullable()
		.required(t("AddProductValidationMessages.productMaterialIsRequired")),
	name: yup
		.string()
		.required(t("AddProductValidationMessages.productNameIsRequired"))
		.nullable()
		.required(t("AddProductValidationMessages.productNameIsRequired"))
		.max(
			maxNumberOfCharsForProductName,
			t("AddVendorProduct.dontExceedCharacters"),
		),
});

export { thirdStepValidation };
