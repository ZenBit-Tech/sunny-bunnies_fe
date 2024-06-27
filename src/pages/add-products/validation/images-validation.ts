import * as Yup from "yup";

import {
	minNumberOfImages,
	productImageValidationMessage,
} from "./constants.ts";

const productImageValidation = Yup.object().shape({
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

const productImagesValidation = Yup.object().shape({
	productImages: Yup.array()
		.of(productImageValidation)
		.min(minNumberOfImages, "Four product images are required"),
});

export { productImageValidation, productImagesValidation };
