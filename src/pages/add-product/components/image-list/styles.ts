import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledImageContainer = styled(Box)({
	display: "flex",
	alignItems: "flex-start",
	gap: "1rem",
});

const ImageBox = styled(Box, {
	shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ selected, theme }) => ({
	position: "relative",
	"& img": {
		height: "12rem",
		width: "10rem",
		border: selected ? `2px solid ${theme.palette.primary.main}` : "none",
	},
}));

const ImageOverlay = styled(Box)({
	position: "absolute",
	top: 0,
	right: 0,
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	width: "100%",
});

const HiddenInput = styled("input")({
	display: "none",
});

export { HiddenInput, ImageOverlay, ImageBox, StyledImageContainer };
