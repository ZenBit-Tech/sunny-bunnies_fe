import { Box, styled } from "@mui/material";

const StyledProductsContainer = styled(Box)`
	display: grid;
	grid-template-columns: repeat(auto-fill, 300px);
	grid-gap: 56px;
	justify-content: space-between;
	padding: 52px 0px 25px 0px;
`;

export { StyledProductsContainer };
