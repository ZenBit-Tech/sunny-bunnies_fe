import * as Yup from "yup";

import {
	creditCardErrorMessages,
	creditCardValidationRules,
} from "./constants.ts";

const creditCardValidation = Yup.object().shape({
	cardNumber: Yup.string()
		.transform((originalValue) => originalValue.replace(/\s/g, ""))
		.matches(/^\d{16}$/, creditCardErrorMessages.cardNumberLength)
		.required(creditCardErrorMessages.cardNumberRequired),

	cvvCode: Yup.string()
		.trim()
		.matches(/^\d{3}$/, creditCardErrorMessages.cvvCodeLength)
		.required(creditCardErrorMessages.cvvCodeRequired),

	expireDate: Yup.string()
		.trim()
		.matches(
			creditCardValidationRules.EXPIRATION_DATE_REGEX,
			creditCardErrorMessages.expirationDateFormat,
		)
		.required(creditCardErrorMessages.expirationDateRequired),
});

export { creditCardValidation };
