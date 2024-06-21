import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { StyledButton, StyledVendorsButtonsGroup } from "./styles.ts";

const zIndexZero = 0;
const zIndexOne = 1;

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
					zIndex: isProductShown ? zIndexOne : zIndexZero,
				}}
				variant={isProductShown ? "primary_black_regular" : "secondary_black"}
			>
				{t("VendorProfilePage.products")}
			</StyledButton>
			<StyledButton
				onClick={onReviewsClick}
				sx={{ zIndex: isProductShown ? zIndexZero : zIndexOne }}
				variant={isProductShown ? "secondary_black" : "primary_black_regular"}
			>
				{t("VendorProfilePage.reviews")}
				<Typography component="span">{`(${reviewsNumber})`}</Typography>
			</StyledButton>
		</StyledVendorsButtonsGroup>
	);
};

export { VendorsButtonsGroup };
