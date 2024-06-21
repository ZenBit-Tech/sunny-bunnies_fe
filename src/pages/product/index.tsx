import { Box, Divider, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { Loader } from "~/components/index.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { useGetProductByIdQuery } from "~/redux/products/products-api.ts";
import { type RootState } from "~/redux/store.ts";

import {
	ImagesSlider,
	ProductButtonsGroup,
	ProductDescription,
	ProductHeader,
	ProductStatusRadio,
	RecommendedProducts,
	SizesDropdown,
	VendorPreviewHeader,
	VendorPreviewModeModal,
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
	const user = useAppSelector((state: RootState) => state.auth.user);

	const [isPreviewMode, setIsPreviewMode] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (user && user.id === product?.user.id) {
			setIsPreviewMode(true);
		}
	}, [user, product]);

	const handleVendorClick = useCallback((): void => {
		if (isPreviewMode) {
			setIsModalOpen(true);
		}
	}, [isPreviewMode]);

	const handleModalClose = useCallback((): void => {
		setIsModalOpen(false);
	}, [setIsModalOpen]);

	if (isLoading) {
		return (
			<Box height="550px">
				<Loader />
			</Box>
		);
	}

	if (isError || !product) {
		return (
			<Box display="flex" justifyContent="center">
				<Typography variant="dmSansBold">
					{t("ProductPage.errorMessage")}
				</Typography>
			</Box>
		);
	}

	const { description, images, maxPrice, minPrice, name, status, variants } =
		product;

	const colors = [...new Set(variants.map((variant) => variant.color.name))];
	const sizes = [...new Set(variants.map((variant) => variant.size.name))];

	return (
		<>
			{isModalOpen && (
				<VendorPreviewModeModal
					isModalOpen={isModalOpen}
					onClose={handleModalClose}
				/>
			)}
			<Box
				display="flex"
				flexDirection="column"
				max-width="1298px"
				onClick={handleVendorClick}
			>
				{isPreviewMode && <VendorPreviewHeader />}
				<StyledProductPageContainer>
					<StyledProductDetailsContainer>
						<ImagesSlider images={images} vendorName={product.user.name} />
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
									<SizesDropdown variants={variants} />
									<ProductStatusRadio
										image={images[defaultProductDataIndex].url}
										name={name}
										price={minPrice}
										status={status}
									/>
								</>
							)}
							<ProductButtonsGroup isPreviewMode={isPreviewMode} />
						</StyledProductDetailsContent>
					</StyledProductDetailsContainer>
					<ProductDescription
						colors={colors}
						description={description}
						sizes={sizes}
					/>
					{!isPreviewMode && <RecommendedProducts />}
				</StyledProductPageContainer>
			</Box>
		</>
	);
};

export { ProductPage };
