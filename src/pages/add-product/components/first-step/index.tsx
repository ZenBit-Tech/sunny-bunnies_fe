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
import { imagesValidation } from "~/pages/add-product/validation/add-images.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";

import { useImageUpload } from "../../hooks/useImageUpload.ts";
import { FieldDescription } from "../field-description/index.tsx";
import { ImageList } from "../image-list/index.tsx";
import { ImageUploader } from "../image-uploader/index.tsx";
import { StyledBox, StyledFormContainer } from "./styles.ts";

type Image = {
	id: string;
	primary: boolean;
	selected: boolean;
	src: string;
};

type FormData = {
	images: Image[];
};

const ImageUpload: React.FC = () => {
	const { t } = useTranslation();
	const {
		handleImageUpload,
		handleReplaceImage,
		images,
		removeImage,
		setPrimaryImage,
		setSelectedImage,
	} = useImageUpload();

	const navigate = useNavigate();

	const {
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<FormData>({
		defaultValues: {
			images: [],
		},
		resolver: yupResolver(imagesValidation),
	});

	useEffect(() => {
		setValue("images", images);
	}, [images, setValue]);

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data);
		navigate(AppRoute.PRODUCT_CATEGORY);
	};

	const renderImageList = useCallback(
		({ field }: { field: ControllerRenderProps<FormData, "images"> }) => (
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
