import * as Yup from "yup";
import { t } from "i18next";

const imagesValidation = Yup.object().shape({
	images: Yup.array()
		.min(4, t("AddProductValidationMessages.minFourImages"))
		.required(t("AddProductValidationMessages.minFourImages")),
});

export { imagesValidation };
