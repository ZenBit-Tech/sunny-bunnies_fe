import { Box, Paper, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { colors } from "~/libs/constants/colors.ts";
import { type ProductImage } from "~/libs/types/products.ts";

import { ImagesSliderElement } from "./images-slider-element.tsx";
import { StyledImagesSliderContainer, StyledMainImage } from "./styles.ts";

const defaultImageIndex = 0;

type ImagesSliderProperties = {
	images: ProductImage[];
	vendorName: string;
};

const ImagesSlider: React.FC<ImagesSliderProperties> = ({
	images,
	vendorName,
}) => {
	const [selectedImage, setSelectedImage] = useState(images[defaultImageIndex]);

	const handleClickImage = useCallback((image: ProductImage): void => {
		setSelectedImage(image);
	}, []);

	useEffect(() => {
		setSelectedImage(images[defaultImageIndex]);
	}, [images]);

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
				<Typography
					color={colors.gray}
					component="p"
					marginTop="15px"
					variant="dmSans"
				>
					{vendorName}
				</Typography>
			</Box>
		</StyledImagesSliderContainer>
	);
};

export { ImagesSlider };
