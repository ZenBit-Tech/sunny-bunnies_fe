import { TFunction } from "i18next";
import * as Yup from "yup";

const minNumberOfImages = 4;

const getProductImageSchema = (
	t: TFunction,
): Yup.ObjectSchema<{
	isPrimary: boolean | undefined;
	url: string;
}> => {
	const productImageValidationMessage = {
		REQUIRED_PRODUCT_IMAGE_URL: t(
			"AddProductValidationMessages.productImageUrlIsRequired",
		),
	};

	return Yup.object({
		isPrimary: Yup.boolean(),
		url: Yup.string().required(
			productImageValidationMessage.REQUIRED_PRODUCT_IMAGE_URL,
		),
	});
};

const getProductImagesValidation = (
	t: TFunction,
): Yup.ObjectSchema<{
	images: {
		isPrimary?: boolean | undefined;
		url: string;
	}[];
}> => {
	const productImageValidationMessage = {
		INVALID_IMAGES_DATA: t(
			"AddProductValidationMessages.fourImagesAreRequired",
		),
		MINIMUM_FOUR_IMAGES: t("AddProductValidationMessages.minFourImages"),
	};

	return Yup.object().shape({
		images: Yup.array()
			.of(getProductImageSchema(t))
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
};

export { getProductImagesValidation };
