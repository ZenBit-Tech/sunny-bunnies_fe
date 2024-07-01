import React, { useCallback } from "react";

import { Paper } from "@mui/material";

import { type ProductImage } from "~/libs/types/products.ts";

import { StyledSliderImage } from "./styles.ts";

type ImagesSliderElementProperties = {
	image: ProductImage;
	onClick: (image: ProductImage) => void;
};

const ImagesSliderElement: React.FC<ImagesSliderElementProperties> = ({
	image,
	onClick,
}) => {
	const handleClickImage = useCallback((): void => {
		onClick(image);
	}, [image, onClick]);

	return (
		<Paper key={image.id} onClick={handleClickImage} sx={{ width: "77px" }}>
			<StyledSliderImage alt={image.description} src={image.url} />
		</Paper>
	);
};

export { ImagesSliderElement };
