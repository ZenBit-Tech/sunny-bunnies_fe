import { Box, styled } from "@mui/material";

import { BaseButton } from "~/components/index.ts";

const StyledButtonsContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding-top: 24px;
`;

const StyledBaseButton = styled(BaseButton)(({ theme }) => ({
	"&:focus": {
		backgroundColor: theme.palette.primary.main,
	},
	"&:hover": {
		backgroundColor: theme.palette.primary.main,
	},
	".MuiTouchRipple-root": {
		display: "none",
	},
}));

export { StyledBaseButton, StyledButtonsContainer };
