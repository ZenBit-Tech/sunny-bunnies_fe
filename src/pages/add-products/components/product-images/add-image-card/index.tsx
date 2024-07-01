import { Button, FormHelperText, Typography } from "@mui/material";
import { type FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { UploadImage } from "~/assets/images/add-product/index.ts";
import { useAppForm } from "~/libs/hooks/use-app-form.hook.ts";
import {
	AddProductImage,
	ProductImageDto,
} from "~/pages/add-products/types.ts";
import { VisuallyHiddenInput } from "~/pages/profile-board/components/styles.ts";
import {
	useDeleteProductImageMutation,
	useUploadProductImageMutation,
} from "~/redux/products/products-api.ts";

import { ProductImagePreview } from "../image-preview/index.tsx";
import {
	StyledAddImageContainer,
	StyledFormController,
	StyledHintTextOnAddImageCard,
} from "./styles.ts";
import { productImageUploadValidation } from "./validation.ts";

const indexZero = 0;

type AddProductImageProperties = {
	index: number;
	initialImage: ProductImageDto;
	isPrimary: boolean;
	onDeleteImage: (index: number) => void;
	onImageChange: (index: number, image: ProductImageDto) => void;
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
	const [uploadProductImage] = useUploadProductImageMutation();
	const [deleteProductImage] = useDeleteProductImageMutation();

	const [selectedFile, setSelectedFile] = useState<File | null | string>(
		initialImage.url ?? null,
	);
	const [imagePreview, setImagePreview] = useState<null | string>(
		initialImage.url ?? null,
	);
	const [isImagePrimary, setIsImagePrimary] = useState(false);
	const [uploadedImageUrl, setUploadedImageUrl] = useState("");
	const [serverError, setServerError] = useState("");

	const { errors, setValue } = useAppForm<AddProductImage>({
		defaultValues: {
			productImage: null,
		},
		validationSchema: productImageUploadValidation,
	});

	const handleFileChange = useCallback(
		async (e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files ? e.target.files[indexZero] : null;
			setValue("productImage", file);
			try {
				if (file) {
					setImagePreview(URL.createObjectURL(file));
					setSelectedFile(file);

					if (file instanceof File) {
						const formDataToSend = new FormData();
						formDataToSend.append("file", file);
						const { url } = await uploadProductImage(formDataToSend).unwrap();

						const productImage = {
							isPrimary,
							url,
						};
						setServerError("");
						setUploadedImageUrl(url);
						onImageChange(index, productImage);
					}
				} else {
					setSelectedFile(null);
				}
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.technicalError") };
				setServerError(loadError.message);
			}
		},
		[index, isPrimary, onImageChange, setValue, t, uploadProductImage],
	);

	const handleDeleteImage = useCallback(async () => {
		try {
			await deleteProductImage(uploadedImageUrl).unwrap();
			setSelectedFile(null);
			setImagePreview(null);
			onDeleteImage(index);
		} catch (error) {
			const deleteError = (error as FetchBaseQueryError).data
				? ((error as FetchBaseQueryError).data as Error)
				: { message: t("Error.technicalError") };
			setServerError(deleteError.message);
		}
	}, [deleteProductImage, index, onDeleteImage, uploadedImageUrl, t]);

	const handleEditImage = useCallback(() => {
		setSelectedFile(null);
		setImagePreview(null);
		handleDeleteImage();
	}, [handleDeleteImage]);

	const handleStarClick = useCallback(() => {
		setIsImagePrimary(!isImagePrimary);
		onSetPrimary(index);
	}, [index, isImagePrimary, onSetPrimary]);

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
