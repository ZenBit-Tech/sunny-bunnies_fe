import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";

import { productIcons } from "~/assets/images/product/index.ts";
import { BaseButton } from "~/components/index.ts";
import theme from "~/theme.ts";

import { StyledBaseButton, StyledButtonsContainer } from "./styles.ts";

type ProductButtonsGroupProperties = {
	isPreviewMode: boolean;
};

const ProductButtonsGroup: React.FC<ProductButtonsGroupProperties> = ({
	isPreviewMode,
}) => {
	const { t } = useTranslation();

	const [isLikeClicked, setIsLikeClicked] = useState(false);

	const handleLikeButtonClick = useCallback((): void => {
		if (!isPreviewMode) {
			setIsLikeClicked(!isLikeClicked);
		}
	}, [isLikeClicked, isPreviewMode]);

	return (
		<StyledButtonsContainer>
			<StyledBaseButton
				startIcon={<productIcons.ShopIcon />}
				sx={{ cursor: isPreviewMode ? "none" : "pointer" }}
				variant="primary_black_bold"
			>
				{t("ProductPage.addToCart")}
			</StyledBaseButton>
			<Box display="flex" gap="32px">
				<BaseButton
					onClick={handleLikeButtonClick}
					startIcon={isLikeClicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
					sx={{
						cursor: isPreviewMode ? "none" : "pointer",
						fill: theme.palette.primary.main,
						textTransform: "none",
					}}
					variant="text"
				>
					{t("ProductPage.wishlist")}
				</BaseButton>
				{!isPreviewMode && (
					<BaseButton
						startIcon={<productIcons.MessengerIcon />}
						sx={{ textTransform: "none" }}
						variant="text"
					>
						{t("ProductPage.messenger")}
					</BaseButton>
				)}
			</Box>
		</StyledButtonsContainer>
	);
};

export { ProductButtonsGroup };
