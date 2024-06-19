import * as Yup from "yup";

import { generalInformationValidationMessage } from "./constants.ts";

const generalInformationValidation = Yup.object().shape({
	phoneNumber: Yup.string()
		.required(generalInformationValidationMessage.PHONE_NUMBER_REQUIRED)
		.test(
			"phone-number",
			generalInformationValidationMessage.PHONE_NUMBER_INVALID,
			function (value) {
				if (!value) return false;

				if (this.parent.phoneNumber.startsWith("+380")) {
					return /^\+380\d{9}$/.test(value);
				} else if (this.parent.phoneNumber.startsWith("+1")) {
					return /^\+1\d{10}$/.test(value);
				}

				return false;
			},
		),
});

export { generalInformationValidation };
