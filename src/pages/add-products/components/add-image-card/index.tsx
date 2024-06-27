import { Button, FormControl, FormHelperText, Typography } from "@mui/material";
import { type FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { UploadImage } from "~/assets/images/add-product/index.ts";
import { useAppForm } from "~/libs/hooks/use-app-form.hook.ts";
import { AddProductImage } from "~/libs/types/products.ts";
import { productImageValidation } from "~/pages/add-products/validation/images-validation.ts";
import { VisuallyHiddenInput } from "~/pages/profile-board/components/styles.ts";
import { useAppDispatch } from "~/redux/hooks.ts";
import { useUploadProductImageMutation } from "~/redux/products/products-api.ts";
import theme from "~/theme.ts";

import { ProductImagePreview } from "../image-preview/index.tsx";
import { StyledAddImageContainer } from "./styles.ts";

const indexZero = 0;

type AddProductImageProperties = {
	index: number;
	isPrimary: boolean;
	onDeleteImage: (index: number) => void;
	onImageChange: (index: number, image: AddProductImage) => void;
	onSetPrimary: (index: number) => void;
};

const AddImageCard: React.FC<AddProductImageProperties> = ({
	index,
	isPrimary,
	onDeleteImage,
	onImageChange,
	onSetPrimary,
}) => {
	const { t } = useTranslation();
	const [uploadProductImage] = useUploadProductImageMutation();
	const dispatch = useAppDispatch();

	const [selectedFile, setSelectedFile] = useState<File | null | string>(null);
	const [imagePreview, setImagePreview] = useState<null | string>(null);
	const [isImagePrimary, setIsImagePrimary] = useState(false);
	const [serverError, setServerError] = useState("");

	const { errors, setValue } = useAppForm<AddProductImage>({
		defaultValues: {
			productImage: null,
		},
		validationSchema: productImageValidation,
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
						const imageUrl = await uploadProductImage(formDataToSend).unwrap();
						const productImage = {
							isPrimary,
							productImage: imageUrl,
						};
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

	const handleDeleteImage = useCallback(() => {
		setSelectedFile(null);
		setImagePreview(null);
		onDeleteImage(index);
	}, [index, onDeleteImage]);

	const handleEditImage = useCallback(() => {
		setSelectedFile(null);
		setImagePreview(null);
		onDeleteImage(index);
	}, [index, onDeleteImage]);

	const handleStarClick = useCallback(() => {
		setIsImagePrimary(!isImagePrimary);
		onSetPrimary(index);
	}, [index, isImagePrimary, onSetPrimary]);

	return (
		<StyledAddImageContainer
			sx={{
				backgroundImage: imagePreview ? `url(${imagePreview})` : "none",
				backgroundPosition: "center",
				backgroundSize: "cover",
				position: imagePreview && "relative",
			}}
		>
			{!selectedFile && (
				<FormControl
					component="fieldset"
					error={Boolean(errors.productImage)}
					sx={{
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
						gap: "6px",
						height: "100%",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<Button component="label" role={undefined} sx={{ padding: 0 }}>
						<UploadImage />
						<VisuallyHiddenInput onChange={handleFileChange} type="file" />
					</Button>
					<Button
						component="label"
						role={undefined}
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
					<Typography
						color={theme.palette.pastelGray}
						fontSize={theme.fontSizes.xs}
						lineHeight="16px"
						textAlign="center"
						variant="dmSans"
					>
						{t("AddVendorProduct.orDropImageToUpload")}
					</Typography>
					{errors.productImage && (
						<FormHelperText sx={{ marginLeft: 0 }}>
							{errors.productImage.message as string}
						</FormHelperText>
					)}
				</FormControl>
			)}
			{selectedFile && (
				<ProductImagePreview
					isImagePrimary={isPrimary}
					onDeleteClick={handleDeleteImage}
					onEditClick={handleEditImage}
					onStarClick={handleStarClick}
				/>
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
