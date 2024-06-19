import * as Yup from "yup";

import { roleValidationMessage, roleValidationRules } from "./constants.ts";

const roleValidation = Yup.object().shape({
	role: Yup.string()
		.oneOf(roleValidationRules.ROLE_VALUES, roleValidationMessage.ROLE_REQUIRED)
		.required(roleValidationMessage.ROLE_REQUIRED),
});

export { roleValidation };
