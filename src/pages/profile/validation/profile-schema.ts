import * as Yup from "yup";

import {
	emailRegex,
	profileValidationMessages,
	profileValidationRules,
} from "./constants.ts";

const profileValidation = Yup.object().shape({
	email: Yup.string()
		.email(profileValidationMessages.EMAIL_INCORRECT)
		.matches(emailRegex, profileValidationMessages.EMAIL_INCORRECT)
		.required(profileValidationMessages.EMAIL_REQUIRED),
	name: Yup.string()
		.min(
			profileValidationRules.NAME_MIN_LENGTH,
			profileValidationMessages.NAME_MIN_LENGTH,
		)
		.required(profileValidationMessages.NAME_REQUIRED),
	profile: Yup.object().shape({
		clothesSize: Yup.string().required(
			profileValidationMessages.REQUIRED_CLOTHES_SIZE,
		),
		jeansSize: Yup.string().required(
			profileValidationMessages.REQUIRED_JEANS_SIZE,
		),
		phoneNumber: Yup.string()
			.required(profileValidationMessages.PHONE_NUMBER_REQUIRED)
			.test(
				"phone-number",
				profileValidationMessages.PHONE_NUMBER_INVALID,
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
		shoeSize: Yup.string().required(
			profileValidationMessages.REQUIRED_SHOE_SIZE,
		),
	}),
});

export { profileValidation };
