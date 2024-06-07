import styled from "@emotion/styled";
import { Box, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";

import { fontFamily, fontSizes, fontWeights } from "~/libs/constants/font.ts";

export const StyledTypography = styled(Typography)`
	font-family: ${fontFamily.PlAYFAIR_DISPLAY};
	font-size: ${fontSizes.large};
	font-weight: ${fontWeights.semiBold};
	line-height: 37px;
	letter-spacing: -0.01em;
	text-align: center;
`;

export const LogoContainer = styled.div`
	display: flex;
	gap: 9.5px;
	align-items: center;
`;

export const StyledFooterText = styled(Typography)`
	font-family: ${fontFamily.DM_SANS};
	font-size: ${fontSizes.medium};
	font-weight: ${fontWeights.regular};
	line-height: 26px;
	text-align: left;
	width: 310px;
`;

export const SocialIconsContainer = styled.div`
	margin-bottom: 76px;
`;
export const StyledFooterTextContainer = styled.div`
	margin-bottom: 24px;
`;
export const StyledFooterCopyrightText = styled(Typography)`
	font-family: ${fontFamily.DM_SANS};
	font-size: ${fontSizes.small};
	font-weight: ${fontWeights.regular};
	line-height: 22px;
`;
export const SocialIconsBox = styled(Box)`
	display: flex;
	gap: 16px;
`;

export const NavTitle = styled(Typography)`
	margin-bottom: 16px;
	font-family: ${fontFamily.DM_SANS};
	font-size: ${fontSizes.small};
	font-weight: ${fontWeights.bold};
	line-height: 24px;
`;
export const FooterContainer = styled(Container)`
	padding: 72px 87px 0 87px;
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 72px;
	height: 232px;
`;

export const NavBox = styled(Box)`
	display: flex;
	gap: 12px;
	flex-direction: column;
	padding: 0;
`;

export const StyledCircularElement = styled(Box)`
	border-radius: 50%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const StyledDivider = styled(Divider)`
	margin-bottom: 24px;
`;
export const FooterBottomContainer = styled(Container)`
	padding-inline: 52px;
`;
