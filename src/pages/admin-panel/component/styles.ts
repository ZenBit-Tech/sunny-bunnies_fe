import { Box, Button, Divider, styled } from "@mui/material";

import theme from "~/theme.ts";

const BoldDivider = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.contentBlack,
	borderRadius: "10px",
	height: "24px",
	marginRight: "12px",
	width: "8px",
}));

const StyledContainer = styled(Box)({
	backgroundColor: theme.palette.gray,
	height: "100%",
	padding: "30px",
});

const StyledWrapperContainer = styled(Box)({
	backgroundColor: theme.palette.white,
	borderRadius: "10px",
	padding: "24px",
});

const StyledWrapperHeader = styled(Box)({
	alignItems: "center",
	display: "flex",
	justifyContent: "space-between",
	marginBottom: "32px",
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

export {
	BoldDivider,
	ProductBox,
	StyledContainer,
	StyledSortButton,
	StyledWrapperContainer,
	StyledWrapperHeader,
	VerticalDivider,
};
