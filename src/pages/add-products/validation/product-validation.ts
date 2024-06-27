import * as Yup from "yup";

import { minNumberOfImages } from "./constants.ts";
import { productImageValidation } from "./images-validation.ts";

const addProductValidation = Yup.object().shape({
	brand: Yup.number().required("Brand is required"),
	category: Yup.number().required("Category is required"),
	material: Yup.number().required("Material is required"),
	productImages: Yup.array()
		.of(productImageValidation)
		.min(minNumberOfImages, "At least one product image is required"),
	style: Yup.number().required("Style is required"),
	type: Yup.number().required("Type is required"),
	variants: Yup.array().of(Yup.object().shape({})),
});

export { addProductValidation };
