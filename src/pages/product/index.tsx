import { Box, Divider, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { Loader } from "~/components/index.ts";
import { productStatus } from "~/libs/constants/index.ts";
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

	const [isPreviewMode, setIsPreviewMode] = useState(false);
	const [selectedSizeId, setSelectedSizeId] = useState<null | number>(null);
	const [selectedStatus, setSelectedStatus] = useState<null | string>(null);

	useEffect(() => {
		if (user && user.id === product?.user.id) {
			setIsPreviewMode(true);
		}
	}, [user, product]);

	const handleSelectSize = useCallback((sizeId: number): void => {
		setSelectedSizeId(sizeId);
	}, []);

	const handleSelectStatus = useCallback((status: string): void => {
		setSelectedStatus(status);
	}, []);

	if (isLoading) {
		return (
			<Box height="550px">
				<Loader />
			</Box>
		);
	}

	if (isError || !product) {
		return (
			<Typography variant="body1">{t("ProductPage.errorMessage")}</Typography>
		);
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
		<Box display="flex" flexDirection="column" max-width="1298px">
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
	);
};

export { ProductPage };
