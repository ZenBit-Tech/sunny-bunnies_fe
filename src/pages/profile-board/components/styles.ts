import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { BaseButton } from "~/components/index.ts";

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

const StyledButton = styled(BaseButton)({
	border: "1px solid",
	borderRadius: "8px",
	gap: "8px",
	height: "34px",
	padding: "8px 24px",
	textTransform: "none",
	width: "78px",
});

export { StyledButton, StyledFormContainer, VisuallyHiddenInput };
