import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import {
	fontSizes,
	fontWeight,
	productStatus,
} from "~/libs/constants/index.ts";

import {
	StyledRadioLabelContainer,
	StyledRadioLabelContent,
	StyledRadioLabelImage,
} from "./styles.ts";

type ProductStatusRadioProperties = {
	image: string;
	name: string;
	price: number;
	status: string;
};

const RadioLabel: React.FC<ProductStatusRadioProperties> = ({
	image,
	name,
	price,
	status,
}) => {
	const { t } = useTranslation();

	return (
		<StyledRadioLabelContainer>
			<StyledRadioLabelContent>
				<Typography
					fontWeight={fontWeight.medium}
					variant="playfairDisplayBold"
				>
					{status === productStatus.FOR_RENT &&
						`${t("ProductPage.oneTimeRental")}`}
				</Typography>
				<Typography variant="dmSansBold">
					{status === productStatus.FOR_RENT &&
						`${t("ProductPage.reserveAnItem")}`}
				</Typography>
				<Typography fontSize={fontSizes.medium} variant="dmSansBold">
					{`$${price}`}
				</Typography>
			</StyledRadioLabelContent>
			<StyledRadioLabelImage>
				<img
					alt={name}
					src={image}
					style={{ borderRadius: "8px", height: "100%", width: "100%" }}
				/>
			</StyledRadioLabelImage>
		</StyledRadioLabelContainer>
	);
};

export { RadioLabel };
