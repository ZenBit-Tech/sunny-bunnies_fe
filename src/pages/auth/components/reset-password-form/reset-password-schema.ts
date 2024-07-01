import * as Yup from "yup";

import { type UserRestorePasswordForm } from "~/libs/types/user.ts";
import {
	userValidationMessage,
	userValidationRules,
} from "~/pages/auth/validation/constants.ts";

const userResetPassword = Yup.object<UserRestorePasswordForm>().shape({
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

export { userResetPassword };
