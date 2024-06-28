import { Box, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

const StyledProductCardContainer = styled(Box)`
	border-radius: 12px;
	box-shadow: 4px 4px 24px 0px ${colors.cardBoxShadow};
	cursor: pointer;
	display: flex;
	flex-direction: column;
	gap: 12px;
	max-width: 300px;
	padding-bottom: 15px;
	width: 300px;
`;

const StyledProductCardContent = styled(Box)`
	align-item: flex-start;
	display: flex;
	gap: 5px;
	justify-content: space-between;
	flex-direction: column;
	padding: 0 15px;
`;

const StyledProductCardImage = styled("img")`
	border-radius: 12px 12px 0 0;
	box-shadow: 4px 4px 24px 0px ${colors.cardBoxShadow};
	height: 240px;
	width: 100%;
`;

export {
	StyledProductCardContainer,
	StyledProductCardContent,
	StyledProductCardImage,
};
