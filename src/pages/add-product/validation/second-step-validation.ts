import * as yup from "yup";

const secondStepValidation = yup.object().shape({
	category: yup
		.string()
		.required("Category is required")
		.nullable()
		.required("Category is required"),
	categoryType: yup
		.string()
		.required("Type is required")
		.nullable()
		.required("Type is required"),
	style: yup
		.string()
		.required("Style is required")
		.nullable()
		.required("Style is required"),
});

export { secondStepValidation };
