import React from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "@mui/material";

import {
	Pen,
	StarIcon,
	StarIconFilled,
	TrashBin,
} from "~/assets/images/add-product/index.ts";
import theme from "~/theme.ts";

import {
	StyledIconButton,
	StyledIconsButtonsContainer,
	StyledStarIconContainer,
} from "./styles.ts";

type ProductImagePreviewProperties = {
	isImagePrimary: boolean;
	onDeleteClick: () => void;
	onEditClick: () => void;
	onStarClick: () => void;
};

const ProductImagePreview: React.FC<ProductImagePreviewProperties> = ({
	isImagePrimary,
	onDeleteClick,
	onEditClick,
	onStarClick,
}) => {
	const { t } = useTranslation();

	return (
		<>
			<StyledStarIconContainer>
				{isImagePrimary ? (
					<>
						<StyledIconButton onClick={onStarClick}>
							<StarIconFilled />
						</StyledIconButton>
						<Typography fontSize={theme.fontSizes.extraSmall} variant="dmSans">
							{t("AddVendorProduct.primary")}
						</Typography>
					</>
				) : (
					<StyledIconButton onClick={onStarClick}>
						<StarIcon />
					</StyledIconButton>
				)}
			</StyledStarIconContainer>
			<StyledIconsButtonsContainer>
				<StyledIconButton onClick={onEditClick}>
					<Pen />
				</StyledIconButton>
				<StyledIconButton onClick={onDeleteClick}>
					<TrashBin />
				</StyledIconButton>
			</StyledIconsButtonsContainer>
		</>
	);
};

export { ProductImagePreview };
