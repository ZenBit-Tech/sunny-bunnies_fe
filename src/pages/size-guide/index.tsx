import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import {
	clothesSizes,
	fontSizes,
	fontWeight,
	shoeSizes,
} from "~/libs/constants/index.ts";

import { TableWithTitle } from "./components/index.ts";
import { StyledSizeGuideHeader } from "./styles.ts";

const SizeGuide: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Box alignItems="center" display="flex" flexDirection="column">
			<StyledSizeGuideHeader>
				<Typography
					color="primary"
					fontSize={fontSizes.title}
					fontWeight={fontWeight.medium}
					variant="playfairDisplay"
				>
					{t("SizesGuidePage.sizesGuide")}
				</Typography>
			</StyledSizeGuideHeader>
			<TableWithTitle
				items={clothesSizes}
				title={t("SizesGuidePage.clothesSizeTable")}
			/>
			<TableWithTitle
				items={shoeSizes}
				title={t("SizesGuidePage.shoeSizeTable")}
			/>
		</Box>
	);
};

export { SizeGuide };
