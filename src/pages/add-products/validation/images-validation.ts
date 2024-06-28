import * as Yup from "yup";

import {
	minNumberOfImages,
	productImageValidationMessage,
} from "./constants.ts";

const productImageUploadValidation = Yup.object().shape({
	productImage: Yup.lazy((value) => {
		if (typeof value === "string") {
			return Yup.mixed().notRequired();
		} else {
			return Yup.mixed()
				.required(productImageValidationMessage.FILE_IS_REQUIRED)
				.test(
					"fileSize",
					productImageValidationMessage.FILE_TOO_LARGE,
					function (value) {
						const file = value as File;
						const maxSize = 1048576;

						return file.size <= maxSize;
					},
				)
				.test(
					"fileType",
					productImageValidationMessage.INVALID_FORMAT,
					function (value) {
						const file = value as File;
						const allowedTypes = ["image/jpeg", "image/png", "image/heic"];

						return allowedTypes.includes(file.type);
					},
				);
		}
	}),
});

const productImageSchema = Yup.object({
	isPrimary: Yup.boolean().required(
		productImageValidationMessage.REQUIRED_PRODUCT_PRIMARY_FLAG,
	),
	productImage: Yup.string().required(
		productImageValidationMessage.REQUIRED_PRODUCT_IMAGE_URL,
	),
});

const productImagesValidation = Yup.object().shape({
	productImages: Yup.array()
		.of(productImageSchema)
		.required()
		.min(minNumberOfImages, productImageValidationMessage.MINIMUM_FOUR_IMAGES)
		.max(minNumberOfImages, productImageValidationMessage.MINIMUM_FOUR_IMAGES),
});

export { productImageUploadValidation, productImagesValidation };
