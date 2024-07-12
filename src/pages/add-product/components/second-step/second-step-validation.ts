import { t } from "i18next";
import * as yup from "yup";

const secondStepValidation = yup.object().shape({
	category: yup
		.string()
		.required(t("AddVendorProduct.productCategoryIsRequired"))
		.nullable()
		.required(t("AddVendorProduct.productCategoryIsRequired")),
	style: yup
		.string()
		.required(t("AddVendorProduct.productStyleIsRequired"))
		.nullable()
		.required(t("AddVendorProduct.productStyleIsRequired")),
	type: yup
		.string()
		.required(t("AddVendorProduct.productTypeIsRequired"))
		.nullable()
		.required(t("AddVendorProduct.productTypeIsRequired")),
});

export { secondStepValidation };
