import { Box, styled } from "@mui/material";

const StyledProductsContainer = styled(Box)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: 20px;
	justify-content: space-between;
	padding: 25px 0px;
`;

export { StyledProductsContainer };
