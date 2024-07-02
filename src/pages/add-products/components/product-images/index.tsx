import React from "react";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";

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
import { useProductImages } from "./use-product-images.hook.ts";

const imagesOrder = [{ order: 0 }, { order: 1 }, { order: 2 }, { order: 3 }];

const ProductImages: React.FC = () => {
	const { t } = useTranslation();

	const {
		errors,
		handleChangeImage,
		handleDeleteImage,
		handleFormSubmit,
		handleSetPrimary,
		productImages,
	} = useProductImages();

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
			{errors.images && (
				<StyledFormHelperText>
					{errors.images.message as string}
				</StyledFormHelperText>
			)}
			<StyledButtonsContainer>
				<FormButtons isStart={false} />
			</StyledButtonsContainer>
		</StyledFormContainer>
	);
};

export { ProductImages };
