import { Box, Divider, Typography, styled } from "@mui/material";

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
	fontSize: theme.fontSizes.large,
}));

const StyledDescriptionSubtitle = styled(Typography)(({ theme }) => ({
	...theme.typography.dmSansBold,
	fontSize: theme.fontSizes.mediumLarge,
	fontWeight: theme.fontWeight.bold,
	width: "150px",
}));

const StyledDescriptionData = styled(Typography)(({ theme }) => ({
	...theme.typography.dmSans,
	fontSize: theme.fontSizes.mediumLarge,
	paddingLeft: "5px",
}));

const StyledProductDetails = styled(Box)`
	align-item: flex-start;
	display: flex;
	gap: 30px;
`;

const StyledDivider = styled(Divider)`
	background-color: ${theme.palette.transparent};
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
