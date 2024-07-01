import { Box, Typography, styled } from "@mui/material";

const StyledVariantsFormContainer = styled(Box)`
	align-items: flex-start;
	justify-content: flex-start;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 24px 24px 24px 0;
	width: 100%;
`;

const StyledVariantDisplayItem = styled(Box)`
	display: flex;
	gap: 10px;
	flex-direction: column;
	width: 100%;
`;

const StyledVariantDisplayContainer = styled(Box)`
	align-items: center;
	justify-content: flex-start;
	display: flex;
	gap: 30px;
	height: 100%;
	padding: 8px 24px;
	width: 100%;
`;

const StyledVariantTypography = styled(Typography)(({ theme }) => ({
	...theme.typography.dmSans,
	color: theme.palette.primary.main,
	fontSize: theme.fontSizes.small,
	width: "15%",
}));

export {
	StyledVariantDisplayContainer,
	StyledVariantDisplayItem,
	StyledVariantTypography,
	StyledVariantsFormContainer,
};
