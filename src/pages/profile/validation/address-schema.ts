import * as Yup from "yup";

import {
	addressValidationMessages,
	addressValidationRules,
} from "./constants.ts";

const addressValidation = Yup.object().shape({
	addressLineOne: Yup.string()
		.max(
			addressValidationRules.ADDRESS_LINE_MAX_LENGTH,
			addressValidationMessages.ADDRESS_LINE_MAX,
		)
		.required(addressValidationMessages.ADDRESS_LINE_ONE_REQUIRED),
	city: Yup.string().required(addressValidationMessages.CITY_REQUIRED),
	country: Yup.string().required(addressValidationMessages.COUNTRY_REQUIRED),
	state: Yup.string().required(addressValidationMessages.STATE_REQUIRED),
});

export { addressValidation };
