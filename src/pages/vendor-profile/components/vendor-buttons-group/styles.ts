import { Box, Button, styled } from "@mui/material";

import { fontFamily, fontSizes, fontWeight } from "~/libs/constants/index.ts";

const StyledVendorsButtonsGroup = styled(Box)`
	display: flex;
`;

const StyledButton = styled(Button)`
	border-radius: 8px;
	height: 44px;
	font-size: ${fontSizes.medium};
	font-weight: ${fontWeight.regular};
	font-family: ${fontFamily.dmSans};
	width: 162px;
`;

export { StyledButton, StyledVendorsButtonsGroup };
