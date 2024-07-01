import * as Yup from "yup";

import { UserRestorePasswordRequestDto } from "~/libs/types/user.ts";
import {
	emailRegex,
	userValidationMessage,
} from "~/pages/auth/validation/constants.ts";

const userRestorePassword = Yup.object<UserRestorePasswordRequestDto>().shape({
	email: Yup.string()
		.email(userValidationMessage.EMAIL_INCORRECT)
		.matches(emailRegex, userValidationMessage.EMAIL_INCORRECT)
		.required(userValidationMessage.EMAIL_REQUIRED),
});

export { userRestorePassword };
