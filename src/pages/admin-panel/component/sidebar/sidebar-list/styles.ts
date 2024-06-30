import { Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
	"&.active": {
		backgroundColor: theme.palette.lightGreen,
	},
	alignItems: "center",
	backgroundColor: theme.palette.transparent,
	borderRadius: "4px",
	color: theme.palette.black,
	display: "flex",
	height: "48px",
	minWidth: "36px",
	padding: "8px 12px",
	textDecoration: "none",
}));

const StyledTab = styled(Typography)(({ theme }) => ({
	...theme.typography.dmSans,
	alignItems: "center",
	display: "flex",
	fontWeight: theme.fontWeight.medium,
	height: "32px",
}));

const StyledMainTab = styled(Typography)(({ theme }) => ({
	...theme.typography.playfairDisplay,
	fontSize: theme.fontSizes.medium,
}));

export { StyledLink, StyledMainTab, StyledTab };
