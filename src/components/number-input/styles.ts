import { Box, TextField, styled } from "@mui/material";

const StyledTextField = styled(TextField)({
	"& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
		display: "none",
	},
	"& input[type=number]": {
		MozAppearance: "textfield",
	},
	textAlign: "center",
	width: "100%",
});

const StyledNumberInputContainer = styled(Box)({
	alignItems: "flex-start",
	display: "flex",
	flexDirection: "column",
	width: "100%",
});

export { StyledNumberInputContainer, StyledTextField };
