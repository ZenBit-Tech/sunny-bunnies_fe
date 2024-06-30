import React from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "@mui/material";

import { fontFamily, fontSizes, fontWeight } from "~/libs/constants/index.ts";

import { StyledTopInfoContainer, StyledTopInfoTextBlock } from "./styles.ts";

const TopInfoSection: React.FC = () => {
	const { t } = useTranslation();

	return (
		<StyledTopInfoContainer>
			<StyledTopInfoTextBlock>
				<Typography
					color="primary.dark"
					fontFamily={fontFamily.piayfairDisplay}
					fontSize={fontSizes.title}
					fontWeight={fontWeight.medium}
				>
					{t("HomePage.freeShopping")}
				</Typography>
				<Typography
					color="primary"
					sx={{ fontWeight: fontWeight.regular }}
					variant="dmSansBold"
				>
					{t("HomePage.forOrder")}
				</Typography>
			</StyledTopInfoTextBlock>
		</StyledTopInfoContainer>
	);
};

export { TopInfoSection };
