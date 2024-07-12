import { t } from "i18next";
import * as Yup from "yup";

const minNumberOfImages = 4;
const firstStepValidation = Yup.object().shape({
	images: Yup.array()
		.min(minNumberOfImages, t("AddProductValidationMessages.minFourImages"))
		.required(t("AddProductValidationMessages.minFourImages")),
});

export { firstStepValidation };
