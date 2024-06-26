import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import theme from "~/theme.ts";

import { StyledButton, StyledVendorsButtonsGroup } from "./styles.ts";

type VendorsButtonsGroupProperties = {
	isProductShown: boolean;
	onProductsClick: () => void;
	onReviewsClick: () => void;
	reviewsNumber: number;
};

const VendorsButtonsGroup: React.FC<VendorsButtonsGroupProperties> = ({
	isProductShown,
	onProductsClick,
	onReviewsClick,
	reviewsNumber,
}) => {
	const { t } = useTranslation();

	return (
		<StyledVendorsButtonsGroup>
			<StyledButton
				onClick={onProductsClick}
				sx={{
					marginRight: "-15px",
					zIndex: isProductShown ? theme.zIndex.medium : theme.zIndex.low,
				}}
				variant={isProductShown ? "primary_black_regular" : "secondary_black"}
			>
				{t("VendorProfilePage.products")}
			</StyledButton>
			<StyledButton
				onClick={onReviewsClick}
				sx={{ zIndex: isProductShown ? theme.zIndex.low : theme.zIndex.medium }}
				variant={isProductShown ? "secondary_black" : "primary_black_regular"}
			>
				{t("VendorProfilePage.reviews")}
				<Typography component="span">{`(${reviewsNumber})`}</Typography>
			</StyledButton>
		</StyledVendorsButtonsGroup>
	);
};

export { VendorsButtonsGroup };
