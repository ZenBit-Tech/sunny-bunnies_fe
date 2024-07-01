import { Box, IconButton, styled } from "@mui/material";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
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
	padding: 0,
}));

const StyledStarIconContainer = styled(Box)(() => ({
	alignItems: "center",
	display: "flex",
	height: "16px",
	justifyContent: "flex-start",
	left: "4px",
	padding: 0,
	position: "absolute",
	top: "4px",
	width: "16px",
}));

const StyledIconsButtonsContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: "8px",
	padding: 0,
	position: "absolute",
	right: "4px",
	top: "4px",
}));

export {
	StyledIconButton,
	StyledIconsButtonsContainer,
	StyledStarIconContainer,
};