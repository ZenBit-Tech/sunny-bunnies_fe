import styled from "@emotion/styled";
import { Button, SvgIcon } from "@mui/material";
import { Box } from "@mui/system";

import { colors } from "~/libs/constants/color.ts";
import { fontFamily, fontSizes, fontWeights } from "~/libs/constants/font.ts";

export const IconsSection = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`;
export const ButtonsContainer = styled.div`
	display: flex;
	gap: 9px;
	align-items: center;
`;
export const HeaderContainer = styled(Box)`
	height: 68px;
	background-color: ${colors.WHITE};
	border: 1px solid ${colors.WHITE};
	padding-inline: 38px;
`;
export const StyledContainer = styled(Box)`
	padding-top: 19px;
	display: flex;
	justify-content: space-between;
`;
export const NavHeaderBox = styled(Box)`
	display: flex;
	gap: 40px;
`;
export const StyledSvgIcon = styled(SvgIcon)`
	cursor: pointer;
`;

export const StyledButtonSignUp = styled(Button)`
	border-radius: 12px;
	background-color: ${colors.WHITE};
	color: ${colors.BLACK};
	font-size: ${fontSizes.small};
	font-weight: ${fontWeights.medium};
	font-family: ${fontFamily.DM_SANS};
	width: 77px;
	height: 34px;
	border: 1px solid ${colors.BLACK};
	text-transform: none;
	transition:
		background-color 0.3s,
		color 0.3s;
	&:hover {
		background-color: ${colors.BLACK};
		color: ${colors.WHITE};
	}
`;
export const StyledButtonLogIn = styled(Button)`
	border-radius: 12px;
	background-color: ${colors.BLACK};
	color: ${colors.WHITE};
	font-size: ${fontSizes.small};
	font-weight: ${fontWeights.medium};
	font-family: ${fontFamily.DM_SANS};
	width: 77px;
	height: 34px;
	border: 1px solid ${colors.BLACK};
	text-transform: none;
	transition:
		background-color 0.3s,
		color 0.3s;
	&:hover {
		background-color: ${colors.WHITE};
		color: ${colors.BLACK};
	}
`;
