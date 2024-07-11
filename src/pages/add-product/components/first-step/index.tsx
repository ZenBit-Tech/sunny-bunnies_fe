import React, { useCallback, useEffect } from "react";
import {
	Controller,
	ControllerRenderProps,
	SubmitHandler,
	useForm,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";

import { AppRoute } from "~/libs/constants/app-route.ts";
import { FirstStepFormData, Image } from "~/pages/add-product/types.ts";
import { firstStepValidation } from "~/pages/add-product/validation/first-step-validation.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";

import { useImageUpload } from "../../hooks/useImageUpload.ts";
import { FieldDescription } from "../field-description/index.tsx";
import { ImageList } from "../image-list/index.tsx";
import { ImageUploader } from "../image-uploader/index.tsx";
import { StyledBox, StyledFormContainer } from "./styles.ts";

interface ImageUploadProps {
	defaultImages: Image[];
	setFirstStepData: (formData: FirstStepFormData) => void;
}
const ImageUpload: React.FC<ImageUploadProps> = ({
	defaultImages,
	setFirstStepData,
}: ImageUploadProps) => {
	const { t } = useTranslation();
	const {
		handleImageUpload,
		handleReplaceImage,
		images,
		removeImage,
		setImagesDefault,
		setPrimaryImage,
		setSelectedImage,
	} = useImageUpload();

	const navigate = useNavigate();
	const checkImagesLength = 4;

	const {
		clearErrors,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<FirstStepFormData>({
		defaultValues: {
			images: [],
		},
		resolver: yupResolver(firstStepValidation),
	});

	useEffect(() => {
		setImagesDefault(defaultImages);
	}, [defaultImages]);

	useEffect(() => {
		setValue("images", images);
		if (images.length >= checkImagesLength) {
			clearErrors("images");
		}
	}, [images, setValue, clearErrors]);

	const onSubmit: SubmitHandler<FirstStepFormData> = (data) => {
		setFirstStepData(data);
		navigate(AppRoute.PRODUCT_CATEGORY);
	};

	const renderImageList = useCallback(
		({
			field,
		}: {
			field: ControllerRenderProps<FirstStepFormData, "images">;
		}) => (
			<ImageList
				handleReplaceImage={handleReplaceImage}
				images={field.value}
				removeImage={removeImage}
				setPrimaryImage={setPrimaryImage}
				setSelectedImage={setSelectedImage}
			/>
		),
		[handleReplaceImage, removeImage, setPrimaryImage, setSelectedImage],
	);

	return (
		<>
			<StyledFormContainer>
				<FieldDescription
					description={t("AddVendorProduct.recommendedMinWidth")}
					title={t("AddVendorProduct.photoProduct")}
				/>

				<Controller control={control} name="images" render={renderImageList} />

				<ImageUploader
					error={errors.images?.message}
					handleImageUpload={handleImageUpload}
				/>
			</StyledFormContainer>
			<StyledBox onClick={handleSubmit(onSubmit)}>
				<FormButtons isStart />
			</StyledBox>
		</>
	);
};

export { ImageUpload };
