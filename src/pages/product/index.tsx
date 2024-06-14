import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { productIcons } from "~/assets/images/product/index.ts";
import { BaseButton } from "~/components/index.ts";
import { productStatus } from "~/libs/constants/product-status.ts";
import { useGetProductByIdQuery } from "~/redux/products/products-api.ts";

import {
	ImagesSlider,
	ProductDescription,
	ProductHeader,
	ProductStatusRadio,
	RecommendedProducts,
	SizesDropdown,
} from "./components/index.ts";
import {
	StyledProductDetailsContainer,
	StyledProductDetailsContent,
	StyledProductPageContainer,
} from "./styles.ts";

const defaultProductDataIndex = 0;

const ProductPage: React.FC = () => {
	const { id } = useParams();
	const { t } = useTranslation();

	const { data: product, isError, isLoading } = useGetProductByIdQuery(id);

	const [isLikeClicked, setIsLikeClicked] = useState(false);
	const [selectedSizeId, setSelectedSizeId] = useState<null | number>(null);
	const [selectedStatus, setSelectedStatus] = useState<null | string>(null);

	const handleLikeButtonClick = useCallback((): void => {
		setIsLikeClicked(!isLikeClicked);
	}, [isLikeClicked]);

	const handleSelectSize = useCallback((sizeId: number): void => {
		setSelectedSizeId(sizeId);
	}, []);

	const handleSelectStatus = useCallback((status: string): void => {
		setSelectedStatus(status);
	}, []);

	if (isError || !product) {
		return (
			<Typography variant="body1">{t("ProductPage.errorMessage")}</Typography>
		);
	}

	if (isLoading) {
		return <CircularProgress />;
	}

	const { description, images, maxPrice, minPrice, name, status, variants } =
		product;

	const defaultStatus =
		product.status === productStatus.BOTH
			? productStatus.FOR_RENT
			: product.status;

	const colors = [...new Set(variants.map((variant) => variant.color.name))];
	const sizes = [...new Set(variants.map((variant) => variant.size.name))];

	return (
		<StyledProductPageContainer>
			<StyledProductDetailsContainer>
				<ImagesSlider images={images} />
				<StyledProductDetailsContent>
					<ProductHeader
						description={description}
						maxPrice={maxPrice}
						minPrice={minPrice}
						name={name}
					/>
					<Divider />
					<Typography color="primary" variant="playfairDisplay">
						{t("ProductPage.chooseSize")}
					</Typography>
					{variants && (
						<>
							<SizesDropdown
								onSelectSize={handleSelectSize}
								variants={variants}
							/>
							<ProductStatusRadio
								defaultSelectedStatus={defaultStatus}
								image={images[defaultProductDataIndex].url}
								name={name}
								onSelectStatus={handleSelectStatus}
								price={minPrice}
								status={status}
							/>
						</>
					)}
					<Box display="flex" flexDirection="column" gap="16px">
						<BaseButton
							startIcon={<productIcons.ShopIcon />}
							variant="primary_black_bold"
						>
							{t("ProductPage.addToCart")}
						</BaseButton>
						<BaseButton variant="secondary_black">
							{t("ProductPage.makeAnOffer")}
						</BaseButton>
						<Box display="flex" gap="32px">
							<BaseButton
								onClick={handleLikeButtonClick}
								startIcon={
									isLikeClicked ? <FavoriteIcon /> : <FavoriteBorderIcon />
								}
								sx={{ fill: "black", textTransform: "none" }}
								variant="text"
							>
								{t("ProductPage.wishlist")}
							</BaseButton>
							<BaseButton
								startIcon={<productIcons.MessengerIcon />}
								sx={{ textTransform: "none" }}
								variant="text"
							>
								{t("ProductPage.messenger")}
							</BaseButton>
						</Box>
					</Box>
				</StyledProductDetailsContent>
			</StyledProductDetailsContainer>
			<ProductDescription
				colors={colors}
				description={description}
				sizes={sizes}
			/>
			<RecommendedProducts />
		</StyledProductPageContainer>
	);
};

export { ProductPage };
