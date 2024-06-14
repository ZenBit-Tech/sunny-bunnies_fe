import { Box, Typography, styled } from "@mui/material";

import { fontSizes, fontWeight } from "~/libs/constants/index.ts";

const StyledProductDescriptionContainer = styled(Box)`
	align-item: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 30px;
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
}));

const StyledProductDetails = styled(Box)`
	align-item: flex-start;
	display: flex;
	gap: 30px;
`;

export {
	StyledDescriptionData,
	StyledDescriptionSubtitle,
	StyledDescriptionTitle,
	StyledProductDescriptionContainer,
	StyledProductDetails,
};
