import { Box, styled } from "@mui/material";

const StyledProductsContainer = styled(Box)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 56px;
	padding: 25px 0px;
	width: 100%;
`;

export { StyledProductsContainer };
