import * as Yup from "yup";

import { sizeValidationMessages } from "./constants.ts";

const sizeValidation = Yup.object().shape({
	clothesSize: Yup.string().required(
		sizeValidationMessages.REQUIRED_CLOTHES_SIZE,
	),
	jeansSize: Yup.string().required(sizeValidationMessages.REQUIRED_JEANS_SIZE),
	shoeSize: Yup.string().required(sizeValidationMessages.REQUIRED_SHOE_SIZE),
});

export { sizeValidation };
