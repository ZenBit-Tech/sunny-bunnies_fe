import { Box, styled } from "@mui/material";

const StyledProductPageContainer = styled(Box)`
	align-item: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 52px;
	padding: 0 52px;
`;

const StyledProductDetailsContainer = styled(Box)`
	align-item: center;
	display: flex;
	height: 907px;
	gap: 130px;
	max-width: 1298px;
	padding: 52px 0;
`;

const StyledProductDetailsContent = styled(Box)`
	align-item: center;
	display: flex;
	flex-direction: column;
	gap: 24px;
	width: 456px;
`;

export {
	StyledProductDetailsContainer,
	StyledProductDetailsContent,
	StyledProductPageContainer,
};
