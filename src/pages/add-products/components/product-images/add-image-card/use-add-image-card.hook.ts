import React, { useCallback, useState } from "react";
import { FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { useAppForm } from "~/libs/hooks/index.ts";
import {
	type AddProductImage,
	type ProductImageDto,
} from "~/pages/add-products/types.ts";
import {
	useDeleteProductImageMutation,
	useUploadProductImageMutation,
} from "~/redux/products/products-api.ts";

import { productImageUploadValidation } from "./validation.ts";

const zeroIndex = 0;

type UseProductImageUploadProps = {
	index: number;
	initialImage: { url?: null | string };
	isPrimary: boolean;
	onDeleteImage: (index: number) => void;
	onImageChange: (image: ProductImageDto, index: number) => void;
	onSetPrimary: (index: number) => void;
};

type UseProductImageUploadReturn = {
	errors: FieldErrors<AddProductImage>;
	handleDeleteImage: () => Promise<void>;
	handleEditImage: () => void;
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
	handleStarClick: () => void;
	imagePreview: null | string;
	selectedFile: File | null | string;
	serverError: string;
};

const useProductImageUpload = ({
	index,
	initialImage,
	isPrimary,
	onDeleteImage,
	onImageChange,
	onSetPrimary,
}: UseProductImageUploadProps): UseProductImageUploadReturn => {
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
			const file = e.target.files ? e.target.files[zeroIndex] : null;
			setValue("productImage", file);
			try {
				if (file) {
					setImagePreview(URL.createObjectURL(file));
					setSelectedFile(file);

					const formDataToSend = new FormData();
					formDataToSend.append("file", file);

					const { url } = await uploadProductImage(formDataToSend).unwrap();

					const productImage = {
						isPrimary,
						url,
					};
					setServerError("");
					setUploadedImageUrl(url);
					onImageChange(productImage, index);
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

	return {
		errors,
		handleDeleteImage,
		handleEditImage,
		handleFileChange,
		handleStarClick,
		imagePreview,
		selectedFile,
		serverError,
	};
};

export { useProductImageUpload };
