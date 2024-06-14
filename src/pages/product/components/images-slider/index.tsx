import { Box, Paper } from "@mui/material";
import React, { useCallback, useState } from "react";

import { type ProductImage } from "~/libs/types/products.ts";

import { ImagesSliderElement } from "./images-slider-element.tsx";
import { StyledImagesSliderContainer, StyledMainImage } from "./styles.ts";

const defaultImageIndex = 0;

type ImagesSliderProperties = {
	images: ProductImage[];
};

const ImagesSlider: React.FC<ImagesSliderProperties> = ({ images }) => {
	const [selectedImage, setSelectedImage] = useState(images[defaultImageIndex]);

	const handleClickImage = useCallback((image: ProductImage): void => {
		setSelectedImage(image);
	}, []);

	return (
		<StyledImagesSliderContainer>
			<Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
				{images.map((image) => (
					<ImagesSliderElement
						image={image}
						key={image.id}
						onClick={handleClickImage}
					/>
				))}
			</Box>
			<Box>
				<Paper sx={{ height: "630px" }}>
					<StyledMainImage
						alt={selectedImage.description}
						src={selectedImage.url}
					/>
				</Paper>
			</Box>
		</StyledImagesSliderContainer>
	);
};

export { ImagesSlider };
