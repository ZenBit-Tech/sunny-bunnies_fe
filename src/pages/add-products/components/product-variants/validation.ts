import * as Yup from "yup";

const productVariantsValidationMessage = {
	MIN_QUANTITY: "Quantity must be at least one",
	MIN_VARIANT: "At least one variant must be added",
	REQUIRED_COLOR: "Product color is required",
	REQUIRED_QUANTITY: "Product quantity is required",
	REQUIRED_SIZE: "Product size is required",
};

const productVariantsRules = {
	MAX_QUANTITY: 1000000,
	MIN_QUANTITY: 1,
	MIN_VARIANT: 1,
};

const productVariantValidation = Yup.object().shape({
	color: Yup.number().required(productVariantsValidationMessage.REQUIRED_COLOR),
	quantity: Yup.number()
		.min(
			productVariantsRules.MIN_QUANTITY,
			productVariantsValidationMessage.MIN_QUANTITY,
		)
		.required(productVariantsValidationMessage.REQUIRED_QUANTITY),
	size: Yup.number().required(productVariantsValidationMessage.REQUIRED_SIZE),
});

const productVariantsValidation = Yup.object().shape({
	productVariants: Yup.array()
		.of(productVariantValidation)
		.min(
			productVariantsRules.MIN_VARIANT,
			productVariantsValidationMessage.MIN_VARIANT,
		),
});

export { productVariantsValidation };
