const roleValidationMessage = {
	ROLE_REQUIRED: "Role is required",
} as const;

const roleValidationRules = {
	ROLE_VALUES: ["vendor", "buyer"],
};

const addressValidationMessages = {
	ADDRESS_LINE_MAX: "Address Line must be at most 74 characters",
	ADDRESS_LINE_ONE_REQUIRED: "Address Line 1 is required",
	CITY_REQUIRED: "City is required",
	COUNTRY_REQUIRED: "Country is required",
	STATE_REQUIRED: "State is required",
};

const generalInformationValidationMessage = {
	FILE_IS_REQUIRED: "You need to provide a file",
	FILE_TOO_LARGE: "The file is too large",
	INVALID_FORMAT: "Please select an image in JPG, HEIC, or PNG format",
	PHONE_NUMBER_INVALID: "Invalid phone number",
	PHONE_NUMBER_REQUIRED: "Phone number is required",
	PROFILE_IMAGE_REQUIRED: "Profile image is required",
};

const addressValidationRules = {
	ADDRESS_LINE_MAX_LENGTH: 74,
};

const creditCardValidationRules = {
	CARD_NUMBER_LENGTH: 16,
	CVV_CODE_LENGTH: 3,
	EXPIRATION_DATE_REGEX: /^(0[1-9]|1[0-2])\/\d{2}$/,
};

const creditCardErrorMessages = {
	CARD_NUMBER_LENGTH: `Card number must be exactly ${creditCardValidationRules.CARD_NUMBER_LENGTH} digits`,
	CARD_NUMBER_REQUIRED: "Card number is required",
	CVV_CODE_LENGTH: `CVV code must be exactly ${creditCardValidationRules.CVV_CODE_LENGTH} digits`,
	CVV_CODE_REQUIRED: "CVV code is required",
	EXPIRATION_DATE_FORMAT: "Expiration date must be in the format MM/YY",
	EXPIRATION_DATE_REQUIRED: "Expiration date is required",
};

const sizeValidationMessages = {
	REQUIRED_CLOTHES_SIZE: "Clothes size is required.",
	REQUIRED_JEANS_SIZE: "Jeans size is required.",
	REQUIRED_SHOE_SIZE: "Shoe size is required.",
};

export {
	addressValidationMessages,
	addressValidationRules,
	creditCardErrorMessages,
	creditCardValidationRules,
	generalInformationValidationMessage,
	roleValidationMessage,
	roleValidationRules,
	sizeValidationMessages,
};
