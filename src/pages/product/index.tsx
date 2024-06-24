import { Box, Typography } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { Loader } from "~/components/index.ts";
import { sortByAscOrder } from "~/helpers/sort-sizes.ts";
import { userRole } from "~/libs/constants/user-role.ts";
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
	StyledProductPageWrapper,
} from "./styles.ts";

const defaultProductDataIndex = 0;

const ProductPage: React.FC = () => {
	const { id } = useParams();
	const { t } = useTranslation();
	const user = useAppSelector((state: RootState) => state.auth.user);

	const {
		data: product,
		error,
		isError,
		isLoading,
	} = useGetProductByIdQuery(id);
	const [serverError, setServerError] = useState("");
	const [isPreviewMode, setIsPreviewMode] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (
			user?.profile.role === userRole.VENDOR &&
			user.id === product?.user.id
		) {
			setIsPreviewMode(true);
		}
		if (isError) {
			const err = (error as FetchBaseQueryError).data as Error;
			setServerError(err.message);
		}
	}, [error, isError, user, product]);

	const handleVendorClick = useCallback(
		(event: React.MouseEvent): void => {
			if (isPreviewMode) {
				setIsModalOpen(true);
				event.stopPropagation();
				event.preventDefault();
			}
		},
		[isPreviewMode],
	);

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

	if (serverError || !product) {
		return (
			<Box
				alignItems="center"
				display="flex"
				height="45%"
				justifyContent="center"
				width="100%"
			>
				<Typography textAlign="center" variant="playfairDisplayBold">
					{serverError}
				</Typography>
			</Box>
		);
	}

	const { description, images, maxPrice, minPrice, name, status, variants } =
		product;

	const colors = [...new Set(variants.map((variant) => variant.color.name))];
	const sizes = [...new Set(variants?.map((variant) => variant.size.name))];
	const sortedSizes = sortByAscOrder(sizes);

	return (
		<>
			{isModalOpen && (
				<VendorPreviewModeModal
					isModalOpen={isModalOpen}
					onClose={handleModalClose}
				/>
			)}
			<StyledProductPageWrapper onClick={handleVendorClick}>
				{isPreviewMode && <VendorPreviewHeader />}
				<StyledProductPageContainer>
					<StyledProductDetailsContainer>
						<ImagesSlider
							images={images}
							isPreviewMode={isPreviewMode}
							vendorName={product?.user.name}
						/>
						<StyledProductDetailsContent>
							<ProductHeader
								description={description}
								maxPrice={maxPrice}
								minPrice={minPrice}
								name={name}
							/>
							<Typography color="primary" variant="playfairDisplay">
								{t("ProductPage.chooseSize")}
							</Typography>
							{variants && (
								<>
									<SizesDropdown disabled={isPreviewMode} variants={variants} />
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
						sizes={sortedSizes}
					/>
					{!isPreviewMode && <RecommendedProducts />}
				</StyledProductPageContainer>
			</StyledProductPageWrapper>
		</>
	);
};

export { ProductPage };
