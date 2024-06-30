import React, { useCallback, useEffect, useState } from "react";

import { Box, Paper, Typography } from "@mui/material";

import { colors } from "~/libs/constants/colors.ts";
import { type ProductImage } from "~/libs/types/products.ts";

import { ImagesSliderElement } from "./images-slider-element.tsx";
import { StyledImagesSliderContainer, StyledMainImage } from "./styles.ts";

const defaultImageIndex = 0;

type ImagesSliderProperties = {
	images: ProductImage[];
	isPreviewMode: boolean;
	vendorName: string;
};

const ImagesSlider: React.FC<ImagesSliderProperties> = ({
	images,
	isPreviewMode,
	vendorName,
}) => {
	const [selectedImage, setSelectedImage] = useState(images[defaultImageIndex]);

	const handleClickImage = useCallback(
		(image: ProductImage): void => {
			if (!isPreviewMode) {
				setSelectedImage(image);
			}
		},
		[isPreviewMode],
	);

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
				{!isPreviewMode && (
					<Typography
						color={colors.gray}
						component="p"
						marginTop="15px"
						variant="dmSans"
					>
						{vendorName}
					</Typography>
				)}
			</Box>
		</StyledImagesSliderContainer>
	);
};

export { ImagesSlider };
