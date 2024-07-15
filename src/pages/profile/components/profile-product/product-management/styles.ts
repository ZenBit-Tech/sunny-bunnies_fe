import { Link } from "react-router-dom";

import {
	Box,
	Button,
	Divider,
	Select,
	Typography,
	styled,
} from "@mui/material";

import theme from "~/theme.ts";

const StyledHeaderTypography = styled(Typography)(({ theme }) => ({
	...theme.typography.playfairDisplayBold,
	fontSize: theme.fontSizes.large,
}));

const BoldDivider = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.contentBlack,
	borderRadius: "10px",
	height: "24px",
	marginRight: "12px",
	width: "8px",
}));

const StyledSortButton = styled(Button)(({ theme }) => ({
	"&:active": {
		backgroundColor: theme.palette.lightGreen,
	},
	"&:focus": {
		background: theme.palette.gray,
	},
	"&:hover": {
		backgroundColor: theme.palette.lightGreen,
	},
	backgroundColor: theme.palette.gray,
	display: "flex",
	gap: "10px",
	padding: "6px 16px",
}));

const StyledWrapperHeader = styled(Box)({
	alignItems: "center",
	display: "flex",
	justifyContent: "space-between",
	marginBottom: "32px",
});

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

const StyledWrapperContainer = styled(Box)({
	backgroundColor: theme.palette.white,
	borderRadius: "10px",
});

const StyledProductsCount = styled("span")(({ theme }) => ({
	...theme.typography.dmSans,
	fontSize: theme.fontSizes.large,
	fontWeight: theme.fontWeight.semiBold,
}));

const StyledSortSelect = styled(Select)(({ theme }) => ({
	...theme.typography.playfairDisplay,
	"& .MuiInputBase-root": {
		padding: "10px",
	},
	"& .MuiOutlinedInput-notchedOutline": {
		border: "none",
	},
	"&:active": {
		backgroundColor: theme.palette.lightGreen,
	},
	"&:focus": {
		background: theme.palette.gray,
	},
	"&:hover": {
		backgroundColor: theme.palette.lightGreen,
	},
	backgroundColor: theme.palette.gray,
	display: "flex",
	fontSize: theme.fontSizes.medium,
	gap: "10px",
}));

export {
	BoldDivider,
	StyledHeaderTypography,
	StyledLink,
	StyledPaper,
	StyledProductsCount,
	StyledSearchBox,
	StyledSortButton,
	StyledSortSelect,
	StyledWrapperContainer,
	StyledWrapperHeader,
};
