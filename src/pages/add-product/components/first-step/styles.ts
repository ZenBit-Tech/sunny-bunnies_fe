import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledFormContainer = styled(Box)`
	align-items: flex-start;
	justify-content: start;
	display: flex;
	gap: 40px;
	padding: 24px;
	width: 100%;
`;

const StyledBox = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: end;
	padding: 1rem;
`;

export { StyledFormContainer, StyledBox };
