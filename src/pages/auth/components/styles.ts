import styled from "@emotion/styled";
import { Box } from "@mui/material";

type Properties = {
	width?: string;
};

const StyledFormContainer = styled(Box)<Properties>`
	align-items: flex-start;
	justify-content: center;
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 10px;
	padding: 5px 0;
	width: ${(props): string => props?.width ?? "80%"};
`;

export { StyledFormContainer };
