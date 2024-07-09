import { Link } from "react-router-dom";

import { Box, styled } from "@mui/material";

const StyledLink = styled(Link)(({ theme }) => ({
	...theme.typography.playfairDisplay,
	"&:hover": {
		color: theme.palette.darkGrey,
	},
	alignItems: "center",
	color: theme.palette.common.black,
	display: "flex",
	fontSize: theme.fontSizes.small,
	fontWeight: theme.fontWeight.bold,
	lineHeight: "24px",
	textDecoration: "none",
}));

const NavHeaderBox = styled(Box)({
	display: "flex",
	gap: "40px",
});

export { NavHeaderBox, StyledLink };
