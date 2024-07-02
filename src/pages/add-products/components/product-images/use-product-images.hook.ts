import React, { useCallback, useEffect } from "react";
import { FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { ProductImageDto } from "~/pages/add-products/types.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import {
	setPrimaryImage,
	updateProductImage,
} from "~/redux/products/product-form-slice.ts";
import { type RootState } from "~/redux/store.ts";

import { getProductImagesValidation } from "./validation.ts";

const minImagesLength = 1;
const notFoundIndex = -1;

type UseProductImagesReturn = {
	errors: FieldErrors<{ images: ProductImageDto[] }>;
	handleChangeImage: (image: ProductImageDto, index: number) => void;
	handleDeleteImage: (index: number) => void;
	handleFormSubmit: (event_: React.BaseSyntheticEvent) => void;
	handleSetPrimary: (index: number) => void;
	productImages: ProductImageDto[];
};

const useProductImages = (): UseProductImagesReturn => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { productImages } = useAppSelector(
		(state: RootState) => state.productForm,
	);

	const validationSchema = getProductImagesValidation(t);

	const { errors, handleSubmit, setValue } = useAppForm<{
		images: ProductImageDto[];
	}>({
		defaultValues: { images: productImages },
		validationSchema,
	});

	useEffect(() => {
		setValue("images", productImages);
	}, [productImages, setValue]);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();
			void handleSubmit(() => {
				navigate(AppRoute.PRODUCT_CATEGORY);
			})(event_);
		},
		[handleSubmit, navigate],
	);

	const handleChangeImage = useCallback(
		(image: ProductImageDto, index: number) => {
			dispatch(updateProductImage({ image, index }));
		},
		[dispatch],
	);

	const handleDeleteImage = useCallback(
		(index: number) => {
			dispatch(
				updateProductImage({ image: { isPrimary: false, url: "" }, index }),
			);

			const currentPrimaryIndex = productImages.findIndex(
				(image: ProductImageDto): boolean => image.isPrimary,
			);

			if (
				currentPrimaryIndex === index &&
				productImages.length > minImagesLength
			) {
				const nextPrimaryIndex = productImages.findIndex((_, i) => i !== index);

				if (nextPrimaryIndex !== notFoundIndex) {
					dispatch(
						updateProductImage({
							image: {
								...productImages[nextPrimaryIndex],
								isPrimary: true,
							},
							index: nextPrimaryIndex,
						}),
					);
				}
			} else if (currentPrimaryIndex === index) {
				dispatch(
					updateProductImage({
						image: {
							...productImages[currentPrimaryIndex],
							isPrimary: false,
						},
						index: currentPrimaryIndex,
					}),
				);
			}
		},
		[dispatch, productImages],
	);

	const handleSetPrimary = useCallback(
		(index: number) => {
			dispatch(setPrimaryImage(index));
		},
		[dispatch],
	);

	return {
		errors,
		handleChangeImage,
		handleDeleteImage,
		handleFormSubmit,
		handleSetPrimary,
		productImages,
	};
};

export { useProductImages };
