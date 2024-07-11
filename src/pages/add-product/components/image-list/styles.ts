import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledImageContainer = styled(Box)({
	alignItems: "flex-start",
	cursor: "pointer",
	display: "flex",
	gap: "1rem",
});

const ImageBox = styled(Box, {
	shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ selected, theme }) => ({
	"& img": {
		border: selected ? `2px solid ${theme.palette.primary.main}` : "none",
		height: "12rem",
		width: "10rem",
	},
	position: "relative",
}));

const ImageOverlay = styled(Box)({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	position: "absolute",
	right: 0,
	top: 0,
	width: "100%",
});

const HiddenInput = styled("input")({
	display: "none",
});

export { HiddenInput, ImageBox, ImageOverlay, StyledImageContainer };
