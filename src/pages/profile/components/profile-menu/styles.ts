import { Box, ButtonProps, styled } from "@mui/material";

import { BaseButton } from "~/components/index.ts";
import { colors, fontSizes } from "~/libs/constants/index.ts";

type MenuButtonProps = { customColor: string; isActive: boolean } & ButtonProps;

const StyledMenuContainer = styled(Box)`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 24px;
	padding: 24px;
`;

const StyledButtonsContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	padding: 0 12px 12px;
	border-radius: 16px;
	box-shadow: 0px 6px 20px 0px ${colors.grayishRed};
`;

const StyledButtonContainer = styled(Box)`
	border-bottom: 1px solid ${colors.grayishRed};
	border-radius: 0;
	padding: 12px 0;
`;

const StyledMenuButton = styled(BaseButton)<MenuButtonProps>(
	({ customColor, isActive, theme }) => ({
		...theme.typography.playfairDisplay,
		"&:focus": {
			backgroundColor: isActive ? customColor : colors.transparent,
		},
		"&:hover": {
			backgroundColor: isActive ? colors.transparent : customColor,
		},
		alignItems: "center",
		backgroundColor: isActive ? customColor : colors.transparent,
		display: "flex",
		fontSize: fontSizes.medium,
		justifyContent: "flex-start",
		textTransform: "capitalize",
		width: "100%",
	}),
);

export {
	StyledButtonContainer,
	StyledButtonsContainer,
	StyledMenuButton,
	StyledMenuContainer,
};
