import { t } from "i18next";
import * as yup from "yup";

const minimumVariantQuantity = 1;
const fourthStepValidation = yup.object().shape({
	color: yup
		.string()
		.required(t("AddProductValidationMessages.colorIsRequired")),
	quantity: yup
		.number()
		.min(minimumVariantQuantity, t("AddProductValidationMessages.minQuantity"))
		.required(t("AddProductValidationMessages.quantityIsRequired")),
	size: yup.string().required(t("AddProductValidationMessages.sizeIsRequired")),
});

export { fourthStepValidation };
