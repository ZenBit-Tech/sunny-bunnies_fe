import { Box, styled } from "@mui/material";

const StyledProductsSection = styled(Box)`
	align-item: flex-start;
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const StyledProductsContent = styled(Box)`
	align-item: flex-start;
	display: flex;
	flex-wrap: wrap;
	gap: 32px;
`;

export { StyledProductsContent, StyledProductsSection };
