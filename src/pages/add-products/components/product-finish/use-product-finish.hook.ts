import React, { useCallback, useState } from "react";
import { Control, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { useAppForm } from "~/libs/hooks/use-app-form.hook.ts";
import { type AddProduct } from "~/pages/add-products/types.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { resetProductForm } from "~/redux/products/product-form-slice.ts";
import { useAddNewProductMutation } from "~/redux/products/products-api.ts";
import { RootState } from "~/redux/store.ts";

import { getFinalProductValidation } from "./validation.ts";

type UseProductFinishReturn = {
	control: Control<AddProduct, null>;
	errors: FieldErrors<AddProduct>;
	handleFormSubmit: (event_: React.BaseSyntheticEvent) => void;
	handlePriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	serverError: string;
};

const useProductFinishForm = (): UseProductFinishReturn => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const [addNewProduct] = useAddNewProductMutation();
	const [serverError, setServerError] = useState("");

	const {
		productCategory,
		productDescription,
		productImages,
		productVariants,
	} = useAppSelector((state: RootState) => state.productForm);

	const validationSchema = getFinalProductValidation(t);

	const { control, errors, handleSubmit, setValue } = useAppForm<AddProduct>({
		defaultValues: {
			brand: productDescription.brand ?? undefined,
			category: productCategory.category ?? undefined,
			description: productDescription.description,
			gender: productDescription.gender ?? undefined,
			images: productImages,
			material: productDescription.material ?? undefined,
			maxPrice: undefined,
			minPrice: undefined,
			name: productDescription.name,
			price: "",
			style: productCategory.style ?? undefined,
			type: productCategory.type ?? undefined,
			variants: productVariants,
		},
		validationSchema,
	});

	const handlePriceChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const price = event.target.value;
			setValue("price", price);

			const [minPrice, maxPrice] = price.split("-").map(Number);
			setValue("maxPrice", maxPrice);
			setValue("minPrice", minPrice);
		},
		[setValue],
	);

	const handleInputChange = useCallback(
		async (formData: AddProduct): Promise<void> => {
			try {
				const { price, variants, ...productData } = formData;
				const sanitizedVariants = variants.map(({ id, ...variant }) => variant);

				await addNewProduct({
					...productData,
					variants: sanitizedVariants,
				}).unwrap();

				void dispatch(resetProductForm());
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);
			}
		},
		[addNewProduct, dispatch, t],
	);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();
			void handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
	);

	return {
		control,
		errors,
		handleFormSubmit,
		handlePriceChange,
		serverError,
	};
};

export { useProductFinishForm };
