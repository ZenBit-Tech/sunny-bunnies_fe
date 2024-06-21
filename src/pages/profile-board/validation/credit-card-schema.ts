import * as Yup from "yup";

import {
	creditCardErrorMessages,
	creditCardValidationRules,
} from "./constants.ts";

const creditCardValidation = Yup.object().shape({
	cardNumber: Yup.string()
		.transform((originalValue) => originalValue.replace(/\s/g, ""))
		.matches(/^\d{16}$/, creditCardErrorMessages.CARD_NUMBER_LENGTH)
		.required(creditCardErrorMessages.CARD_NUMBER_REQUIRED),

	cvvCode: Yup.string()
		.trim()
		.matches(/^\d{3}$/, creditCardErrorMessages.CVV_CODE_LENGTH)
		.required(creditCardErrorMessages.CVV_CODE_REQUIRED),

	expireDate: Yup.string()
		.trim()
		.matches(
			creditCardValidationRules.EXPIRATION_DATE_REGEX,
			creditCardErrorMessages.EXPIRATION_DATE_FORMAT,
		)
		.required(creditCardErrorMessages.EXPIRATION_DATE_REQUIRED),
});

export { creditCardValidation };
