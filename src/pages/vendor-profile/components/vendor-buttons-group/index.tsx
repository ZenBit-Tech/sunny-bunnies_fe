import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

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
				variant={isProductShown ? "primary_black_regular" : "secondary_black"}
			>
				{t("VendorProfilePage.products")}
			</StyledButton>
			<StyledButton
				onClick={onReviewsClick}
				variant={isProductShown ? "secondary_black" : "primary_black_regular"}
			>
				{t("VendorProfilePage.reviews")}
				<Typography component="span">{`(${reviewsNumber})`}</Typography>
			</StyledButton>
		</StyledVendorsButtonsGroup>
	);
};

export { VendorsButtonsGroup };
