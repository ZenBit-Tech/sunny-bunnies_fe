import React, { useCallback, useState } from "react";

import { Typography } from "@mui/material";

import { LikeIcon } from "~/assets/icons/like-icon.tsx";
import ShopCart from "~/assets/icons/shop-cart.svg?react";
import { colors, fontSizes, fontWeight } from "~/libs/constants/index.ts";
import { Product } from "~/libs/types/products.ts";

import {
	ImageSlider,
	SliderDot,
	StyledLikeIconButton,
	StyledProductCardContainer,
	StyledProductCardDataContainer,
	StyledProductCardDataContent,
	StyledProductCardImage,
	StyledProductCardImageContainer,
	StyledShopIconButton,
} from "./styles.ts";

const defaultImageIndex = 0;
const minImagesForSlider = 1;

type ProductCardProperties = {
	product: Product;
	vendorName: string;
};

const ProductCard: React.FC<ProductCardProperties> = ({
	product,
	vendorName,
}) => {
	const [isLikeClicked, setIsLikeClicked] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(defaultImageIndex);

	const handleImageChange = useCallback((index: number): void => {
		setCurrentImageIndex(index);
	}, []);

	const handleSlideClickWithIndex = useCallback(
		(index: number) => (): void => {
			handleImageChange(index);
		},
		[handleImageChange],
	);

	const handleLikeClick = useCallback((): void => {
		setIsLikeClicked(!isLikeClicked);
	}, [isLikeClicked]);

	return (
		<StyledProductCardContainer>
			<StyledProductCardImageContainer>
				<StyledProductCardImage
					alt={product.images[currentImageIndex].description}
					src={product.images[currentImageIndex].url}
				/>
				<StyledLikeIconButton onClick={handleLikeClick}>
					{isLikeClicked ? (
						<LikeIcon sx={{ color: colors.likeIconColor }} />
					) : (
						<LikeIcon sx={{ color: colors.white }} />
					)}
				</StyledLikeIconButton>
				_
				{product.images.length > minImagesForSlider && (
					<ImageSlider>
						{product.images.map((_, index) => (
							<SliderDot
								active={index === currentImageIndex}
								key={index}
								onClick={handleSlideClickWithIndex(index)}
							/>
						))}
					</ImageSlider>
				)}
			</StyledProductCardImageContainer>
			<StyledProductCardDataContainer>
				<StyledProductCardDataContent>
					<Typography
						fontWeight={fontWeight.medium}
						variant="playfairDisplayBold"
					>
						{product.name}
					</Typography>
					<Typography color={colors.gray} variant="dmSansBold">
						{`$ ${product.minPrice}`}
					</Typography>
					<Typography fontSize={fontSizes.small} variant="dmSans">
						{vendorName}
					</Typography>
				</StyledProductCardDataContent>
				<StyledShopIconButton>
					<ShopCart />
				</StyledShopIconButton>
			</StyledProductCardDataContainer>
		</StyledProductCardContainer>
	);
};

export { ProductCard };
