import * as Yup from "yup";

import { productImageValidationMessage } from "./constants.ts";

const categoryTypeStyleValidation = Yup.object().shape({
	category: Yup.number().required(
		productImageValidationMessage.REQUIRED_CATEGORY,
	),
	style: Yup.number().required(productImageValidationMessage.REQUIRED_STYLE),
	type: Yup.number().required(productImageValidationMessage.REQUIRED_TYPE),
});

export { categoryTypeStyleValidation };
