import { Box, IconButton, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

const StyledVendorPreviewHeader = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
	padding: "0 38px",
	width: "100%",
}));

const StyledIconButton = styled(IconButton)(() => ({
	"& .MuiTouchRipple-root": {
		display: "none",
	},
	"&:hover, &:focus": {
		background: "none",
		boxShadow: "none",
		color: colors.black,
		outline: "none",
	},
	padding: "0",
}));

export { StyledIconButton, StyledVendorPreviewHeader };
