import { Dialog, IconButton, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

const VendorDialog = styled(Dialog)(() => ({
	"& .MuiDialogActions-root": {
		padding: "15px",
	},
	"& .MuiDialogContent-root": {
		padding: "15px",
	},
}));

const StyledCrossIconButton = styled(IconButton)(() => ({
	color: colors.black,
	position: "absolute",
	right: 8,
	top: 8,
}));

export { StyledCrossIconButton, VendorDialog };
