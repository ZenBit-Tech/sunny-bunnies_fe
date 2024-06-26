import * as Yup from "yup";

import { generalInformationValidationMessage } from "./constants.ts";

const generalInformationValidation = Yup.object().shape({
	phoneNumber: Yup.string()
		.required(generalInformationValidationMessage.PHONE_NUMBER_REQUIRED)
		.test(
			"phone-number",
			generalInformationValidationMessage.PHONE_NUMBER_INVALID,
			function (value) {
				if (!value) return false;

				if (this.parent.phoneNumber.startsWith("+380")) {
					return /^\+380\d{9}$/.test(value);
				} else if (this.parent.phoneNumber.startsWith("+1")) {
					return /^\+1\d{10}$/.test(value);
				}

				return false;
			},
		),
	profilePhoto: Yup.lazy((value) => {
		if (typeof value === "string") {
			return Yup.mixed().notRequired();
		} else {
			return Yup.mixed()
				.required(generalInformationValidationMessage.FILE_IS_REQUIRED)
				.test(
					"fileSize",
					generalInformationValidationMessage.FILE_TOO_LARGE,
					function (value) {
						const file = value as File;
						const maxSize = 1048576;

						return file.size <= maxSize;
					},
				)
				.test(
					"fileType",
					generalInformationValidationMessage.INVALID_FORMAT,
					function (value) {
						const file = value as File;
						const allowedTypes = ["image/jpeg", "image/png", "image/heic"];

						return allowedTypes.includes(file.type);
					},
				);
		}
	}),
});

export { generalInformationValidation };
