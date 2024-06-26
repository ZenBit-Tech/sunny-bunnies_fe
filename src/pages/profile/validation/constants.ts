const profileValidationMessages = {
	EMAIL_INCORRECT: "Email format is incorrect",
	EMAIL_REQUIRED: "Email is required",
	NAME_MIN_LENGTH: "Name should have at least 2 characters",
	NAME_REQUIRED: "Name is required",
	PHONE_NUMBER_INVALID: "Invalid phone number",
	PHONE_NUMBER_REQUIRED: "Phone number is required",
	REQUIRED_CLOTHES_SIZE: "Clothes size is required.",
	REQUIRED_JEANS_SIZE: "Jeans size is required.",
	REQUIRED_SHOE_SIZE: "Shoe size is required.",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const profileValidationRules = {
	NAME_MIN_LENGTH: 2,
};

const addressValidationMessages = {
	ADDRESS_LINE_MAX: "Address Line must be at most 74 characters",
	ADDRESS_LINE_ONE_REQUIRED: "Address Line 1 is required",
	CITY_REQUIRED: "City is required",
	COUNTRY_REQUIRED: "Country is required",
	STATE_REQUIRED: "State is required",
};
const addressValidationRules = {
	ADDRESS_LINE_MAX_LENGTH: 74,
};

export {
	addressValidationMessages,
	addressValidationRules,
	emailRegex,
	profileValidationMessages,
	profileValidationRules,
};
