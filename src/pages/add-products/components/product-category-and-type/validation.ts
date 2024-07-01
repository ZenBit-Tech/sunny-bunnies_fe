import * as Yup from "yup";

const productDetailsValidationMessage = {
	REQUIRED_CATEGORY: "Product category is required",
	REQUIRED_STYLE: "Product style is required",
	REQUIRED_TYPE: "Product type is required",
};

const categoryTypeStyleValidation = Yup.object().shape({
	category: Yup.number().required(
		productDetailsValidationMessage.REQUIRED_CATEGORY,
	),
	style: Yup.number().required(productDetailsValidationMessage.REQUIRED_STYLE),
	type: Yup.number().required(productDetailsValidationMessage.REQUIRED_TYPE),
});

export { categoryTypeStyleValidation };
