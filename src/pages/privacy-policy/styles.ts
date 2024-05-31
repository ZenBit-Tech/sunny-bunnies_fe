import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

import { colors } from "~/libs/constants/color.ts";
import { fontFamily } from "~/libs/constants/font.ts";

export const PrivacyBox = styled(Box)`
	background-color: ${colors.GREYRISH_RED};
	height: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const PrivacyTitle = styled(Typography)`
	font-family: ${fontFamily.PlAYFAIR_DISPLAY};
	font-size: 40px;
	font-weight: 500;
	line-height: 58px;
	letter-spacing: -1px;
`;
export const ArticleContainer = styled(Box)`
	padding-inline: 198px;
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin-block: 64px;
`;
export const PrivacyArticleStyledText = styled(Typography)`
	font-family: ${fontFamily.DM_SANS};
	font-size: 16px;
	font-weight: 400;
	line-height: 26px;
	text-align: left;
	color: ${colors.GREY};
`;
export const PrivacyArticleStyledTitle = styled(Typography)`
	font-family: ${fontFamily.DM_SANS};
	color: ${colors.BLACK};
	font-size: 24px;
	font-weight: 500;
	line-height: 44px;
	text-align: left;
	margin-bottom: 16px;
	&.centered-title {
		text-align: center;
	}
`;
