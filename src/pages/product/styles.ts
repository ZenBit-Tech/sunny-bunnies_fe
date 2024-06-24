import { Box, styled } from "@mui/material";

const StyledProductPageWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	max-width: 1298px;
`;

const StyledProductPageContainer = styled(Box)`
	align-item: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 52px;
	padding: 52px;
`;

const StyledProductDetailsContainer = styled(Box)`
	align-item: center;
	display: flex;
	gap: 130px;
	max-width: 1298px;
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
	StyledProductPageWrapper,
};
