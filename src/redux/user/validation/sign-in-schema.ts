import * as Yup from "yup";

import {
	emailRegex,
	userValidationMessage,
	userValidationRules,
} from "./constants/index.ts";

const userSignInValidation = Yup.object().shape({
	email: Yup.string()
		.email(userValidationMessage.EMAIL_INVALID)
		.matches(emailRegex, userValidationMessage.EMAIL_INVALID)
		.required(userValidationMessage.EMAIL_REQUIRED),
	password: Yup.string()
		.min(
			userValidationRules.PASSWORD_MIN_LENGTH,
			userValidationMessage.PASSWORD_MIN_LENGTH,
		)
		.required(userValidationMessage.PASSWORD_REQUIRED),
});

export { userSignInValidation };
