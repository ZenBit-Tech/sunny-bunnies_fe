import * as Yup from "yup";

const productImageValidationMessage = {
	INVALID_IMAGES_DATA:
		"Four images are required and tt least one image must be marked as primary",
	MINIMUM_FOUR_IMAGES: "Minimum four images are required",
	REQUIRED_PRODUCT_IMAGE_URL: "Product image URL is required",
};

const minNumberOfImages = 4;

const productImageSchema = Yup.object({
	isPrimary: Yup.boolean(),
	url: Yup.string().required(
		productImageValidationMessage.REQUIRED_PRODUCT_IMAGE_URL,
	),
});

const productImagesValidation = Yup.object().shape({
	images: Yup.array()
		.of(productImageSchema)
		.required()
		.min(minNumberOfImages, productImageValidationMessage.MINIMUM_FOUR_IMAGES)
		.test(
			"is-primary-and-valid-urls",
			productImageValidationMessage.INVALID_IMAGES_DATA,
			function (value) {
				const { allowEmptyUrls } = this.options.context || {
					allowEmptyUrls: false,
				};

				const hasPrimary = value.some((image) => image.isPrimary);

				const allValidUrls = value.every(
					(image) => allowEmptyUrls || !!image.url,
				);

				return hasPrimary && allValidUrls;
			},
		),
});

export { productImagesValidation };
