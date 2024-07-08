import { Link } from "react-router-dom";

import { Box, Typography, styled } from "@mui/material";

import theme from "~/theme.ts";

const StyledHeaderTypography = styled(Typography)(({ theme }) => ({
	...theme.typography.playfairDisplayBold,
	fontSize: theme.fontSizes.large,
}));

const StyledLink = styled(Link)(({ theme }) => ({
	"&.active": {
		backgroundColor: theme.palette.lightGreen,
		fontWeight: theme.fontWeight.regular,
	},
	alignItems: "center",
	backgroundColor: theme.palette.transparent,
	borderRadius: "6px",
	color: theme.palette.black,
	display: "flex",
	fontFamily: theme.fontFamily.dmSans,
	fontSize: theme.fontSizes.small,
	fontWeight: theme.fontWeight.bold,
	height: "36px",
	justifyContent: "center",
	minWidth: "100px",
	padding: "8px 12px",
	textDecoration: "none",
}));

const StyledSearchBox = styled(Box)({
	border: `1px solid ${theme.palette.gray}`,
	borderRadius: "6px",
	margin: "32px 0",
	width: "100%",
});

const StyledPaper = styled(Box)({
	alignItems: "center",
	boxShadow: "inherit",
	display: "flex",
	width: "100%",
});

export { StyledHeaderTypography, StyledLink, StyledPaper, StyledSearchBox };
