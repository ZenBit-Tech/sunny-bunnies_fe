import { Box, Grid, Typography, styled } from "@mui/material";

const StyledProfileContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.lightGray,
	padding: "32px",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	backgroundColor: theme.palette.white,
	borderRadius: "10px",
	marginTop: "24px",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
	...theme.typography.playfairDisplay,
	fontSize: theme.fontSizes.large,
	fontWeight: theme.fontWeight.semiBold,
	letterSpacing: "-0.01em",
	lineHeight: "37px",
	textAlign: "center",
}));

export { StyledGrid, StyledProfileContainer, StyledTypography };
