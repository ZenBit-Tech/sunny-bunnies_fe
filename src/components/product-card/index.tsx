import React, { useCallback } from "react";

import { Box, Typography } from "@mui/material";

import { FilledHeartIcon } from "~/assets/icons/filled-heart-icon.tsx";
import { ShopIcon } from "~/assets/icons/shop-cart-icon.tsx";
import { configureString } from "~/helpers/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { Product } from "~/libs/types/products.ts";
import { useAppSelector } from "~/redux/hooks.ts";

import { defaultImageIndex, imageQuantity } from "./constats.ts";
import { ProductSlider } from "./product-slider/index.tsx";
import {
	CustomHeartIcon,
	CustomIcon,
	StyledCard,
	StyledCardWrapper,
	StyledImage,
	StyledImageWrapper,
	StyledLinkTitle,
	StyledLinkVendor,
	StyledProductInfo,
	StyledProductInfoWrapper,
	StyledSmallTypography,
	StyledTypography,
} from "./styles.ts";
import { useAddToWishlist } from "./use-add-to-wish-list.hook.ts";

type ProductCardProps = {
	item: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
	const { id, images, minPrice, name, user } = item;
	const { handleAddToWishlist } = useAddToWishlist();

	const fullWishlist = useAppSelector((state) => state.wishlist.fullWishlist);

	const isWishlistProduct = fullWishlist.some(
		(wishlistItem) => wishlistItem.id === item.id,
	);

	const onAddToWishlist = useCallback(() => {
		handleAddToWishlist(item);
	}, [handleAddToWishlist, item]);

	return (
		<StyledCard>
			<StyledCardWrapper>
				{images.length > imageQuantity ? (
					<ProductSlider item={item} />
				) : (
					<StyledImageWrapper
						to={configureString(AppRoute.PRODUCT, { id: String(id) })}
					>
						<StyledImage
							alt={images[defaultImageIndex].description}
							src={images[defaultImageIndex].url}
						/>
					</StyledImageWrapper>
				)}
				<CustomHeartIcon
					isWishlistProduct={isWishlistProduct}
					onClick={onAddToWishlist}
				>
					<FilledHeartIcon />
				</CustomHeartIcon>
				<StyledProductInfoWrapper>
					<Box width="100%">
						<StyledTypography>
							<StyledLinkTitle
								to={configureString(AppRoute.PRODUCT, { id: String(id) })}
							>
								{name}
							</StyledLinkTitle>
						</StyledTypography>
						<StyledProductInfo>
							<Box>
								<StyledSmallTypography>$ {minPrice}</StyledSmallTypography>
								<Typography>
									<StyledLinkVendor
										to={configureString(AppRoute.VENDORS_PROFILE, {
											id: String(user.id),
										})}
									>
										{user.name}
									</StyledLinkVendor>
								</Typography>
							</Box>
							<CustomIcon>
								<ShopIcon />
							</CustomIcon>
						</StyledProductInfo>
					</Box>
				</StyledProductInfoWrapper>
			</StyledCardWrapper>
		</StyledCard>
	);
};

export { ProductCard };
