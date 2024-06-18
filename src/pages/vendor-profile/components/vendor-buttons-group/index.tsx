import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { colors } from "~/libs/constants/index.ts";

import { StyledButton, StyledVendorsButtonsGroup } from "./styles.ts";

type VendorsButtonsGroupProperties = {
	onClick: () => void;
	reviewsNumber: number;
};
const VendorsButtonsGroup: React.FC<VendorsButtonsGroupProperties> = ({
	onClick,
	reviewsNumber,
}) => {
	const { t } = useTranslation();

	return (
		<StyledVendorsButtonsGroup>
			<StyledButton onClick={onClick} variant="primary_black_regular">
				{t("VendorProfilePage.products")}
			</StyledButton>
			<StyledButton
				onClick={onClick}
				sx={{
					backgroundColor: colors.lightGray,
					border: "none",
				}}
				variant="secondary_black"
			>
				{t("VendorProfilePage.reviews")}
				<Typography component="span">{`(${reviewsNumber})`}</Typography>
			</StyledButton>
		</StyledVendorsButtonsGroup>
	);
};

export { VendorsButtonsGroup };
