import { Box, Dialog, DialogContent, IconButton, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

const VendorDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		overflowY: "initial",
		padding: 0,
	},
	"& .MuiPaper-root": {
		borderRadius: "8px",
		boxShadow: `0px 3px 5px 0px ${theme.palette.shadowColor}`,
		display: "flex",
		gap: "40px",
		margin: 0,
		maxWidth: "472px",
		padding: "20px",
	},
	"& .MuiTouchRipple-root": {
		display: "none",
	},
	alignContent: "space-between",
	display: "flex",
	flexDirection: "column",
}));

const StyledCrossIconButton = styled(IconButton)(() => ({
	"& .MuiTouchRipple-root": {
		display: "none",
	},
	"&:active": {
		background: "transparent",
		backgroundColor: "transparent",
	},
	"&:hover, &:focus": {
		background: "transparent",
		backgroundColor: "transparent",
		boxShadow: "none",
	},
	color: colors.black,
}));

const StyledVendorPreviewIcon = styled(Box)(() => ({
	color: colors.black,
	height: "94px",
	width: "94px",
}));

const StyledDialogContent = styled(DialogContent)(() => ({
	alignItems: "center",
	display: "flex",
	flexDirection: "column",
	gap: "24px",
	justifyContent: "center",
}));

export {
	StyledCrossIconButton,
	StyledDialogContent,
	StyledVendorPreviewIcon,
	VendorDialog,
};
