import { Box, Divider, Typography, styled } from "@mui/material";

import { fontSizes, fontWeight } from "~/libs/constants/index.ts";
import theme from "~/theme.ts";

const StyledProductDescriptionContainer = styled(Box)`
	align-item: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 30px;
	padding: 20px 0 0 90px;
`;

const StyledDescriptionTitle = styled(Typography)(({ theme }) => ({
	...theme.typography.playfairDisplayBold,
	fontSize: fontSizes.large,
}));

const StyledDescriptionSubtitle = styled(Typography)(({ theme }) => ({
	...theme.typography.dmSansBold,
	fontSize: fontSizes.mediumLarge,
	fontWeight: fontWeight.bold,
	width: "150px",
}));

const StyledDescriptionData = styled(Typography)(({ theme }) => ({
	...theme.typography.dmSans,
	fontSize: fontSizes.mediumLarge,
	paddingLeft: "5px",
}));

const StyledProductDetails = styled(Box)`
	align-item: flex-start;
	display: flex;
	gap: 30px;
`;

const StyledDivider = styled(Divider)`
	background-color: transparent;
	height: 2px;
	position: relative;
	width: 100%;
	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 0;
		height: 100%;
	}
	&::before {
		left: 0;
		width: 112px;
		background-color: ${theme.palette.primary.main};
	}
`;

export {
	StyledDescriptionData,
	StyledDescriptionSubtitle,
	StyledDescriptionTitle,
	StyledDivider,
	StyledProductDescriptionContainer,
	StyledProductDetails,
};
