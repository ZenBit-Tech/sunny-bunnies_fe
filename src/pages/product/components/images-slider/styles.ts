import { Box, styled } from "@mui/material";

const StyledImagesSliderContainer = styled(Box)`
	align-item: center;
	display: flex;
	gap: 12px;
	justify-content: flex-start;
	height: 20px;
	width: 570px;
`;

const StyledMainImage = styled("img")({
	height: "100%",
	width: "100%",
});

const StyledSliderImage = styled("img")({
	height: "102px",
	width: "100%",
});

export { StyledImagesSliderContainer, StyledMainImage, StyledSliderImage };
