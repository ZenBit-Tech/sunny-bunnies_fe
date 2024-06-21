import { Box, Typography, styled } from "@mui/material";

import { colors, fontSizes } from "~/libs/constants/index.ts";

const StyledProductDetailsHeader = styled(Box)`
	align-item: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 16px;
	padding: 0 0 24px 0;
`;

const StyledProductName = styled(Typography)(({ theme }) => ({
	...theme.typography.playfairDisplayTitle,
	color: colors.black,
	fontSize: fontSizes.xxl,
}));

const StyledProductShortDescription = styled(Typography)(({ theme }) => ({
	...theme.typography.dmSans,
	color: colors.black,
	fontSize: fontSizes.small,
}));

const StyledCanceledPrice = styled(Typography)(({ theme }) => ({
	...theme.typography.dmSans,
	color: colors.gray,
	textDecoration: "line-through",
}));

export {
	StyledCanceledPrice,
	StyledProductDetailsHeader,
	StyledProductName,
	StyledProductShortDescription,
};
