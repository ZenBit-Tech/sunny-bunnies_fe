import * as Yup from "yup";

import {
	emailRegex,
	userValidationMessage,
	userValidationRules,
} from "./constants/index.ts";

const userSignUpValidation = Yup.object().shape({
	email: Yup.string()
		.email(userValidationMessage.EMAIL_INVALID)
		.matches(emailRegex, userValidationMessage.EMAIL_INVALID)
		.required(userValidationMessage.EMAIL_REQUIRED),
	name: Yup.string()
		.min(
			userValidationRules.NAME_MIN_LENGTH,
			userValidationMessage.NAME_MIN_LENGTH,
		)
		.required(userValidationMessage.NAME_REQUIRED),
	password: Yup.string()
		.min(
			userValidationRules.PASSWORD_MIN_LENGTH,
			userValidationMessage.PASSWORD_MIN_LENGTH,
		)
		.required(userValidationMessage.PASSWORD_REQUIRED),
	repeatPassword: Yup.string()
		.oneOf(
			[Yup.ref("password"), ""],
			userValidationMessage.REPEAT_PASSWORD_MATCH,
		)
		.required(userValidationMessage.REPEAT_PASSWORD_REQUIRED),
});

export { userSignUpValidation };
