import { TFunction } from "i18next";
import * as Yup from "yup";

const getCategoryTypeStyleValidation = (
	t: TFunction<string>,
): Yup.ObjectSchema<{
	category: number;
	style: number;
	type: number;
}> => {
	const productDetailsValidationMessage = {
		REQUIRED_CATEGORY: t("AddVendorProduct.productCategoryIsRequired"),
		REQUIRED_STYLE: t("AddVendorProduct.productStyleIsRequired"),
		REQUIRED_TYPE: t("AddVendorProduct.productTypeIsRequired"),
	};

	return Yup.object().shape({
		category: Yup.number().required(
			productDetailsValidationMessage.REQUIRED_CATEGORY,
		),
		style: Yup.number().required(
			productDetailsValidationMessage.REQUIRED_STYLE,
		),
		type: Yup.number().required(productDetailsValidationMessage.REQUIRED_TYPE),
	});
};

export { getCategoryTypeStyleValidation };
