import React from "react";
import { useTranslation } from "react-i18next";

import { Button, FormHelperText, Typography } from "@mui/material";

import { UploadImage } from "~/assets/images/add-product/index.ts";
import { ProductImageDto } from "~/pages/add-products/types.ts";
import { VisuallyHiddenInput } from "~/pages/profile-board/components/styles.ts";

import { ProductImagePreview } from "../image-preview/index.tsx";
import {
	StyledAddImageContainer,
	StyledFormController,
	StyledHintTextOnAddImageCard,
} from "./styles.ts";
import { useProductImageUpload } from "./use-add-image-card.hook.ts";

type AddProductImageProperties = {
	index: number;
	initialImage: ProductImageDto;
	isPrimary: boolean;
	onDeleteImage: (index: number) => void;
	onImageChange: (image: ProductImageDto, index: number) => void;
	onSetPrimary: (index: number) => void;
};

const AddImageCard: React.FC<AddProductImageProperties> = ({
	index,
	initialImage,
	isPrimary,
	onDeleteImage,
	onImageChange,
	onSetPrimary,
}) => {
	const { t } = useTranslation();

	const {
		errors,
		handleDeleteImage,
		handleEditImage,
		handleFileChange,
		handleStarClick,
		imagePreview,
		selectedFile,
		serverError,
	} = useProductImageUpload({
		index,
		initialImage,
		isPrimary,
		onDeleteImage,
		onImageChange,
		onSetPrimary,
	});

	return (
		<StyledAddImageContainer
			sx={{
				backgroundImage: imagePreview ? `url(${imagePreview})` : "none",
				position: imagePreview ? "relative" : "static",
			}}
		>
			{!selectedFile && (
				<StyledFormController
					as="fieldset"
					{...(errors.productImage ? { error: true } : null)}
				>
					<Button component="label" role={undefined} sx={{ padding: 0 }}>
						<UploadImage />
						<VisuallyHiddenInput onChange={handleFileChange} type="file" />
					</Button>
					<Button
						component="label"
						role="button"
						sx={{
							alignItems: "center",
							border: "solid",
							borderRadius: "8px",
							display: "flex",
							height: "34px",
							justifyContent: "center",
							minWidth: "95px",
							padding: "16px",
						}}
						variant="primary_black_regular"
					>
						<Typography lineHeight="18px" variant="dmSansBold">
							{t("AddVendorProduct.addImage")}
						</Typography>
						<VisuallyHiddenInput onChange={handleFileChange} type="file" />
					</Button>
					<StyledHintTextOnAddImageCard>
						{t("AddVendorProduct.orDropImageToUpload")}
					</StyledHintTextOnAddImageCard>
				</StyledFormController>
			)}
			{selectedFile && (
				<ProductImagePreview
					isImagePrimary={initialImage.isPrimary}
					onDeleteClick={handleDeleteImage}
					onEditClick={handleEditImage}
					onStarClick={handleStarClick}
				/>
			)}
			{errors.productImage && (
				<FormHelperText sx={{ marginLeft: 0 }}>
					{errors.productImage.message as string}
				</FormHelperText>
			)}
			{serverError && (
				<Typography color="error" variant="body2">
					{serverError}
				</Typography>
			)}
		</StyledAddImageContainer>
	);
};

export { AddImageCard };
