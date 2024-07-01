import * as Yup from "yup";

const productImageValidationMessage = {
	FILE_IS_REQUIRED: "You need to provide a file",
	FILE_TOO_LARGE: "The file is too large",
	INVALID_FORMAT: "Please select an image in JPG, HEIC, or PNG format",
};

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

export { productImageUploadValidation };
