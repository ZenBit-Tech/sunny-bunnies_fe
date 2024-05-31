const userValidationMessage = {
	EMAIL_INCORRECT: "Email format is incorrect",
	EMAIL_INVALID: "Email should be in format example@gmail.com",
	EMAIL_REQUIRED: "Email is required",
	NAME_MIN_LENGTH: "Name should have at least 2 characters",
	NAME_REQUIRED: "Name is required",
	PASSWORD_IS_MISSING: "Password is missing",
	PASSWORD_MIN_LENGTH: "Password needs to be at least 8 characters",
	PASSWORD_REQUIRED: "Password is required",
	REPEAT_PASSWORD_MATCH: "Repeat password should match the password",
	REPEAT_PASSWORD_REQUIRED: "Repeat password is required",
} as const;

export { userValidationMessage };
