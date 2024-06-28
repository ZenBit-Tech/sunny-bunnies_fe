import { Link } from "react-router-dom";

import { Box, Divider, styled } from "@mui/material";

import theme from "~/theme.ts";

const StyledContainer = styled(Box)({
	backgroundColor: theme.palette.gray,
	height: "100%",
	padding: "30px",
});

const VerticalDivider = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.gray,
	height: "auto",
	marginLeft: "24px",
	marginRight: "12px",
	width: "1px",
}));

const ProductBox = styled(Box)({
	alignItems: "center",
	display: "flex",
	justifyContent: "space-between",
	width: "100%",
});

const StyledLink = styled(Link)(({ theme }) => ({
	"&.active": {
		backgroundColor: theme.palette.lightGreen,
	},
	alignItems: "center",
	backgroundColor: theme.palette.transparent,
	borderRadius: "4px",
	display: "flex",
	height: "48px",
	minWidth: "36px",
	padding: "8px 12px",
	textDecoration: "none",
}));

export { ProductBox, StyledContainer, StyledLink, VerticalDivider };
