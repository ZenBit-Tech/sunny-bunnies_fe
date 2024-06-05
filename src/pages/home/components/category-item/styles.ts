import { Box, styled } from "@mui/material";

const StyledCategoryContainer = styled(Box)`
	align-item: center;
	display: flex;
	flex-direction: column;
	gap: 12px;
	height: 240px;
	justify-content: center;
	width: 196px;
`;

const StyledCategoryImage = styled(Box)`
	align-item: center;
	display: flex;
	height: 196px;
	justify-content: center;
	overflow: hidden;
	width: 196px;
`;

const RoundImage = styled("img")`
	border-radius: 50%;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export { RoundImage, StyledCategoryContainer, StyledCategoryImage };
