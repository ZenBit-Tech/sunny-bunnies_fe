import { t } from "i18next";
import * as yup from "yup";

const priceRegex = /^(\d+)-(\d+)/;

const fifthStepValidation = yup.object().shape({
	price: yup
		.string()
		.required(t("AddProductValidationMessages.priceIsRequired"))
		.matches(priceRegex, {
			excludeEmptyString: true,
			message: t("AddProductValidationMessages.incorrectPriceFormat"),
		})
		.test(
			"is-valid-range",
			t("AddProductValidationMessages.invalidPriceRange"),
			(value) => {
				if (value) {
					const [min, max] = value.split("-").map(Number);

					return min < max;
				}

				return false;
			},
		),
});

export { fifthStepValidation };
