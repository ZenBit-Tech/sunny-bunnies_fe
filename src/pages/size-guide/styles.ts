import { Box, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

const StyledSizeGuideHeader = styled(Box)`
	background-color: ${colors.grayishRed};
	height: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 32px 0 52px 0;
	width: 100%;
`;

export { StyledSizeGuideHeader };
