import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { FieldDescription } from "../field-description";
import { ImageList } from "../image-list";
import { ImageUploader } from "../image-uploader";
import { StyledBox, StyledFormContainer } from "./styles.ts";
import { useImageUpload } from "../../hooks/useImageUpload.ts";
import { imagesValidation } from "~/pages/add-product/validation/add-images";
import { FormButtons } from "~/pages/profile-board/components/buttons";

type Image = {
	id: string;
	src: string;
	primary: boolean;
	selected: boolean;
};
const ImageUpload: React.FC = () => {
	const { t } = useTranslation();
	const {
		images,
		handleImageUpload,
		handleReplaceImage,
		setPrimaryImage,
		setSelectedImage,
		removeImage,
	} = useImageUpload();

	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(imagesValidation),
		defaultValues: {
			images: [],
		},
	});

	useEffect(() => {
		setValue("images", images);
	}, [images, setValue]);

	const onSubmit = (data: Image) => {};

	return (
		<>
			<StyledFormContainer>
				<FieldDescription
					title={t("AddVendorProduct.photoProduct")}
					description={t("AddVendorProduct.recommendedMinWidth")}
				/>

				<Controller
					name="images"
					control={control}
					render={({ field }) => (
						<ImageList
							images={field.value}
							setPrimaryImage={setPrimaryImage}
							setSelectedImage={setSelectedImage}
							handleReplaceImage={handleReplaceImage}
							removeImage={removeImage}
						/>
					)}
				/>

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
