import { Box, Dialog, DialogContent, IconButton, styled } from "@mui/material";

const VendorDialog = styled(Dialog)(() => ({
	"& .MuiDialogContent-root": {
		overflowY: "initial",
		padding: 0,
	},
	"& .MuiPaper-root": {
		borderRadius: "8px",
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

const StyledCrossIconButton = styled(IconButton)(({ theme }) => ({
	"& .MuiTouchRipple-root": {
		display: "none",
	},
	"&:active": {
		background: `${theme.palette.transparent}`,
		backgroundColor: `${theme.palette.transparent}`,
	},
	"&:hover, &:focus": {
		background: `${theme.palette.transparent}`,
		backgroundColor: `${theme.palette.transparent}`,
		boxShadow: "none",
	},
	color: theme.palette.primary.main,
}));

const StyledVendorPreviewIcon = styled(Box)(({ theme }) => ({
	color: theme.palette.primary.main,
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
