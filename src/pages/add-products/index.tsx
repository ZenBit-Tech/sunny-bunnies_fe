import { Tab, Tabs, Typography } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAppForm } from "~/libs/hooks/use-app-form.hook.ts";
import {
	type AddProductImage,
	type ProductVariant,
} from "~/libs/types/products.ts";
import theme from "~/theme.ts";

import { TabsBoard } from "../profile-board/components/tabs-board.tsx";
import { ProductCategoryAndType, ProductImages } from "./components/index.ts";
import { addProductTabRoutes } from "./constants.ts";
import {
	StyledAddProductContainer,
	StyledAddProductForms,
	StyledAddProductSteps,
} from "./styles.ts";
import { type AddProductRequestDto } from "./types.ts";
import { addProductValidation } from "./validation/product-validation.ts";

const AddProducts: React.FC = () => {
	const { t } = useTranslation();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const { handleSubmit } = useAppForm<AddProductRequestDto>({
		defaultValues: {
			brand: 0,
			category: 0,
			material: 0,
			productImages: [],
			type: 0,
			variants: [],
		},
		validationSchema: addProductValidation,
	});
	const [productImages, setProductImages] = useState<AddProductImage[] | null>(
		null,
	);
	const [category, setCategory] = useState<null | number>(null);
	const [type, setType] = useState<null | number>(null);
	const [variants, setVariants] = useState<ProductVariant[] | null>(null);
	const [serverError, setServerError] = useState("");

	const handleInputChange = useCallback(async (): Promise<void> => {
		try {
			const product = {
				category,
				images: productImages,
				type,
				variants,
			};
		} catch (error) {
			const loadError = (error as FetchBaseQueryError).data
				? ((error as FetchBaseQueryError).data as Error)
				: { message: t("Error.technicalError") };
			setServerError(loadError.message);
		}
	}, [category, navigate, productImages, t, type, variants]);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();
			handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
	);

	const handleTabChange = useCallback(
		(_event: React.SyntheticEvent, newValue: string): void => {
			navigate(newValue);
		},
		[navigate],
	);

	const handleSetImages = useCallback((images: AddProductImage[]): void => {
		setProductImages(images);
	}, []);

	return (
		<StyledAddProductContainer component="form" onSubmit={handleFormSubmit}>
			<Typography fontSize={theme.fontSizes.lg} variant="playfairDisplayTitle">
				{t("AddVendorProduct.addProduct")}
			</Typography>
			<StyledAddProductSteps sx={{ width: "100%" }}>
				<Tabs
					aria-label="product tabs"
					onChange={handleTabChange}
					scrollButtons="auto"
					sx={{ borderBottom: `1px solid #00000014`, borderRadius: "8px" }}
					value={pathname}
					variant="scrollable"
				>
					{addProductTabRoutes.map((tab) => (
						<Tab
							disabled
							key={tab.route}
							label={
								<TabsBoard
									label={tab.label}
									number={tab.number}
									tabRoute={tab.route}
									tabRoutes={addProductTabRoutes}
								/>
							}
							sx={{
								maxWidth: "none",
								padding: "0px",
								textTransform: "none",
								width: "20%",
							}}
							value={tab.route}
						/>
					))}
				</Tabs>
				<StyledAddProductForms>
					{pathname === AppRoute.PRODUCT_PHOTOS && (
						<ProductImages onChangeImages={handleSetImages} />
					)}
					{pathname === AppRoute.PRODUCT_CATEGORY && <ProductCategoryAndType />}
				</StyledAddProductForms>
			</StyledAddProductSteps>
		</StyledAddProductContainer>
	);
};

export { AddProducts };
