import { Box, styled } from "@mui/material";

import { BaseButton } from "~/components/index.ts";

const StyledAddressBox = styled(Box)(({ theme }) => ({
	border: `1px solid ${theme.palette.lightGray}`,
	borderRadius: "12px",
	display: "flex",
	flexDirection: "column",
	gap: "8px",
	minWidth: "308px",
	padding: "16px",
	width: "fit-content",
}));

const StyledButton = styled(BaseButton)(({ theme }) => ({
	borderRadius: "12px",
	fontFamily: `${theme.typography.playfairDisplay.fontFamily}`,
	padding: "8px 24px",
	textTransform: "capitalize",
	width: "100px",
}));

export { StyledAddressBox, StyledButton };
