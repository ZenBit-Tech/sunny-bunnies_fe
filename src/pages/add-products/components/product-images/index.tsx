import { Box } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { ProductImageDto } from "~/pages/add-products/types.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import {
	setPrimaryImage,
	updateProductImage,
} from "~/redux/products/product-form-slice.ts";
import { type RootState } from "~/redux/store.ts";

import {
	StyledButtonsContainer,
	StyledFormContainer,
	StyledFormDescription,
	StyledFormGroup,
	StyledFormHelperText,
	StyledFormTitle,
	StyledTextGroup,
} from "../styles.ts";
import { AddImageCard } from "./add-image-card/index.tsx";
import { productImagesValidation } from "./validation.ts";

const minImagesLength = 1;
const notFoundIndex = -1;

const imagesOrder = [{ order: 0 }, { order: 1 }, { order: 2 }, { order: 3 }];

const ProductImages: React.FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { productImages } = useAppSelector(
		(state: RootState) => state.productForm,
	);

	const { errors, handleSubmit, setValue } = useAppForm<{
		productImages: ProductImageDto[];
	}>({
		defaultValues: { productImages },
		validationSchema: productImagesValidation,
	});

	useEffect(() => {
		setValue("productImages", productImages);
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
		(index: number, image: ProductImageDto) => {
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

	return (
		<StyledFormContainer component="form" onSubmit={handleFormSubmit}>
			<StyledFormGroup>
				<StyledTextGroup>
					<StyledFormTitle>
						{t("AddVendorProduct.photoProduct")}
					</StyledFormTitle>
					<StyledFormDescription>
						{t("AddVendorProduct.recommendedMinWidth")}
					</StyledFormDescription>
				</StyledTextGroup>
				<Box display="flex" gap="26px">
					{imagesOrder.map(({ order }) => (
						<AddImageCard
							index={order}
							initialImage={productImages[order]}
							isPrimary={productImages[order]?.isPrimary || false}
							key={order}
							onDeleteImage={handleDeleteImage}
							onImageChange={handleChangeImage}
							onSetPrimary={handleSetPrimary}
						/>
					))}
				</Box>
			</StyledFormGroup>
			{errors.productImages && (
				<StyledFormHelperText>
					{errors.productImages.message as string}
				</StyledFormHelperText>
			)}
			<StyledButtonsContainer>
				<FormButtons isStart={false} />
			</StyledButtonsContainer>
		</StyledFormContainer>
	);
};

export { ProductImages };
