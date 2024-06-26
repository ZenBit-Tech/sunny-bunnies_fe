import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { fontSizes } from "~/libs/constants/fonts.ts";

import { DescriptionDetailsItem } from "./description-details-item.tsx";
import {
	StyledDescriptionTitle,
	StyledProductDescriptionContainer,
} from "./styles.ts";

type ProductDescriptionProperties = {
	colors: string[];
	description: string;
	sizes: string[];
};

const ProductDescription: React.FC<ProductDescriptionProperties> = ({
	colors,
	description,
	sizes,
}) => {
	const { t } = useTranslation();

	return (
		<StyledProductDescriptionContainer>
			<StyledDescriptionTitle>
				{t("ProductPage.description")}
			</StyledDescriptionTitle>
			<Divider />
			<Box>
				<Typography fontSize={fontSizes.small} variant="dmSans">
					{description}
				</Typography>
			</Box>
			<DescriptionDetailsItem items={sizes} title={t("ProductPage.sizes")} />
			<DescriptionDetailsItem items={colors} title={t("ProductPage.colors")} />
		</StyledProductDescriptionContainer>
	);
};

export { ProductDescription };
