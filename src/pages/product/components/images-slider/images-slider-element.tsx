import { Paper } from "@mui/material";
import React, { useCallback } from "react";

import { type ProductImage } from "~/libs/types/products.ts";

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
			<img
				alt={image.description}
				src={image.url}
				style={{ height: "102px", width: "100%" }}
			/>
		</Paper>
	);
};

export { ImagesSliderElement };
