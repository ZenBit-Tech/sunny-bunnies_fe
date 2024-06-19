import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledFormContainer = styled(Box)`
	align-items: flex-start;
	justify-content: center;
	display: flex;
	gap: 40px;
	padding: 24px;
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

export { StyledFormContainer, VisuallyHiddenInput };
