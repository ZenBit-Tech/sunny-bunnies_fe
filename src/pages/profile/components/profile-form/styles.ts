import { Box, styled } from "@mui/material";

const StyledInputWrapper = styled(Box)`
	width: 100%;
`;

const VisuallyHiddenInput = styled("input")({
	border: "0",
	clip: "rect(0, 0, 0, 0)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: "0",
	position: "absolute",
	whiteSpace: "nowrap",
	width: "1px",
});

export { StyledInputWrapper, VisuallyHiddenInput };
