import { Box, styled } from "@mui/material";

import { BaseButton } from "~/components/index.ts";
import { colors, fontFamily, fontSizes } from "~/libs/constants/index.ts";

const StyledButtonsContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	padding: 12px;
	border-radius: 16px;
	box-shadow: 0px 6px 20px 0px #1919190f;
`;

const StyledBaseButton = styled(BaseButton)`
	border-bottom: 1px solid ${colors.grayishRed};
	border-radius: 0;
	width: 100%;
	padding: 12px;
	text-transform: capitalize;
	font-style: ${fontFamily.dmSans};
	font-size: ${fontSizes.medium};
	justify-content: flex-start;
`;

export { StyledBaseButton, StyledButtonsContainer };
