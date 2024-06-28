import { Box, FormHelperText, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { ProductImageDto } from "~/libs/types/products.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";
import theme from "~/theme.ts";

import { productImagesValidation } from "../validation/images-validation.ts";
import { AddImageCard } from "./add-image-card/index.tsx";
import { StyledFormContainer, StyledFormLabel } from "./styles.ts";

const defaultIsPrimaryIndex = 0;
const imagesOrder = [{ order: 0 }, { order: 1 }, { order: 2 }, { order: 3 }];

const initialValues = {
	productImages: [{ isPrimary: true, productImage: "" }],
};

type ProductImagesProperties = {
	onChangeImages: (productImages: ProductImageDto[]) => void;
};

const ProductImages: React.FC<ProductImagesProperties> = ({
	onChangeImages,
}) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [selectedImages, setSelectedImages] = useState<ProductImageDto[]>(
		initialValues.productImages,
	);

	const { errors, handleSubmit, setValue } = useAppForm({
		defaultValues: initialValues,
		validationSchema: productImagesValidation,
	});

	useEffect(() => {
		setValue("productImages", selectedImages);
	}, [selectedImages, setValue]);

	const handleAddImages = useCallback(async () => {
		onChangeImages(selectedImages);
	}, [onChangeImages, selectedImages]);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();
			handleSubmit(handleAddImages)(event_);
			navigate(AppRoute.PRODUCT_CATEGORY);
		},
		[handleAddImages, handleSubmit, navigate],
	);

	const handleChangeImage = useCallback(
		(index: number, image: ProductImageDto) => {
			setSelectedImages((prevImages) => {
				const updatedImages = [...prevImages];
				updatedImages[index] = {
					...image,
					isPrimary:
						index === defaultIsPrimaryIndex
							? true
							: prevImages[index]?.isPrimary || false,
				};
				setValue("productImages", updatedImages);

				return updatedImages;
			});
		},
		[setValue],
	);

	const handleDeleteImage = useCallback((index: number) => {
		setSelectedImages((prevImages) => {
			return prevImages.filter((_, imageIndex) => index !== imageIndex);
		});
	}, []);

	const handleSetPrimary = useCallback((index: number) => {
		setSelectedImages((prevImages) =>
			prevImages.map((img, i) => ({
				...img,
				isPrimary: i === index ? !img.isPrimary : false,
			})),
		);
	}, []);

	return (
		<StyledFormContainer component="form" onSubmit={handleFormSubmit}>
			<Box display="flex" gap="40px" padding="12px 24px" width="100%">
				<Box display="flex" flexDirection="column" width="150px">
					<StyledFormLabel>
						{t("AddVendorProduct.photoProduct")}
					</StyledFormLabel>
					<Typography
						sx={{
							color: theme.palette.fontGray,
							fontSize: theme.fontSizes.small,
						}}
						variant="dmSans"
					>
						{t("AddVendorProduct.recommendedMinWidth")}
					</Typography>
				</Box>
				<Box display="flex" gap="26px">
					{imagesOrder.map((image) => (
						<AddImageCard
							index={image.order}
							isPrimary={selectedImages[image.order]?.isPrimary || false}
							key={image.order}
							onDeleteImage={handleDeleteImage}
							onImageChange={handleChangeImage}
							onSetPrimary={handleSetPrimary}
						/>
					))}
				</Box>
			</Box>
			{errors.productImages && (
				<FormHelperText
					sx={{
						color: theme.palette.error.main,
						marginLeft: 0,
						paddingLeft: "24px",
					}}
				>
					{errors.productImages.message as string}
				</FormHelperText>
			)}
			<Box
				alignSelf="flex-end"
				display="flex"
				gap="10px"
				justifyContent="flex-end"
				marginTop="10%"
				padding="15px 24px"
			>
				<FormButtons isStart={false} redirectTo={AppRoute.PRODUCT_CATEGORY} />
			</Box>
		</StyledFormContainer>
	);
};

export { ProductImages };
