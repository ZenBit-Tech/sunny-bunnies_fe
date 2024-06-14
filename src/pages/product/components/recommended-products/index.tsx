import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { BaseButton } from "~/components/index.ts";
import { fontSizes } from "~/libs/constants/index.ts";
import { ProductCard } from "~/pages/home/components/index.ts";
import { useGetProductsQuery } from "~/redux/products/products-api.ts";

import {
	StyledRecommendedProductsContainer,
	StyledRecommendedProductsHeader,
	StyledRecommendedProductsSlider,
} from "./styles.ts";

const indexOne = 1;
const minProductIndex = 0;
const productPerPage = 4;

const RecommendedProducts: React.FC = () => {
	const { t } = useTranslation();
	const productsPerPage = productPerPage;
	const [currentIndex, setCurrentIndex] = useState(minProductIndex);

	const {
		data: products,
		isError,
		isLoading,
	} = useGetProductsQuery({ limit: 10 });

	const handleNext = useCallback(() => {
		if (products && currentIndex < products.length - productsPerPage) {
			setCurrentIndex(currentIndex + indexOne);
		}
	}, [currentIndex, products, productsPerPage, setCurrentIndex]);

	const handlePrev = useCallback(() => {
		if (currentIndex > minProductIndex) {
			setCurrentIndex(currentIndex - indexOne);
		}
	}, [currentIndex, setCurrentIndex]);

	return (
		<StyledRecommendedProductsContainer>
			{isError && (
				<Typography>{t("ProductPage.errorMessageRecommended")}</Typography>
			)}
			{isLoading && <CircularProgress />}
			<StyledRecommendedProductsHeader>
				<Typography fontSize={fontSizes.l} variant="playfairDisplayBold">
					{t("ProductPage.youMightAlsoLike")}
				</Typography>
				<Box display="flex" gap="12px">
					<BaseButton
						disabled={currentIndex === minProductIndex}
						onClick={handlePrev}
						startIcon={<ArrowBackIcon fontSize="small" />}
						variant="small_icon"
					/>
					<BaseButton
						disabled={
							products && currentIndex >= products.length - productsPerPage
						}
						onClick={handleNext}
						startIcon={<ArrowForwardIcon fontSize="small" />}
						variant="small_icon"
					/>
				</Box>
			</StyledRecommendedProductsHeader>
			<StyledRecommendedProductsSlider>
				{products &&
					products
						.slice(currentIndex, currentIndex + productsPerPage)
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
			</StyledRecommendedProductsSlider>
		</StyledRecommendedProductsContainer>
	);
};

export { RecommendedProducts };
