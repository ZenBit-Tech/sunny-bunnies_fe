import { Tab, Tabs, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/app-route.ts";
import theme from "~/theme.ts";

import { TabsBoard } from "../profile-board/components/tabs-board.tsx";
import {
	ProductCategoryAndType,
	ProductDescriptionForm,
	ProductFinish,
	ProductImages,
	ProductVariantsForm,
} from "./components/index.ts";
import { addProductTabRoutes } from "./constants.ts";
import {
	StyledAddProductContainer,
	StyledAddProductForms,
	StyledAddProductSteps,
} from "./styles.ts";

const AddProducts: React.FC = () => {
	const { t } = useTranslation();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleTabChange = useCallback(
		(_event: React.SyntheticEvent, newValue: string): void => {
			navigate(newValue);
		},
		[navigate],
	);

	return (
		<StyledAddProductContainer>
			<Typography fontSize={theme.fontSizes.lg} variant="playfairDisplayTitle">
				{t("AddVendorProduct.addProduct")}
			</Typography>
			<StyledAddProductSteps sx={{ width: "100%" }}>
				<Tabs
					aria-label="product tabs"
					onChange={handleTabChange}
					scrollButtons="auto"
					sx={{
						borderBottom: `1px solid ${theme.palette.borderGray}`,
						borderRadius: "8px",
					}}
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
					{pathname === AppRoute.PRODUCT_PHOTOS && <ProductImages />}
					{pathname === AppRoute.PRODUCT_CATEGORY && <ProductCategoryAndType />}
					{pathname === AppRoute.PRODUCT_DESCRIPTION && (
						<ProductDescriptionForm />
					)}
					{pathname === AppRoute.PRODUCT_VARIANTS && <ProductVariantsForm />}
					{pathname === AppRoute.PRODUCT_FINISH && <ProductFinish />}
				</StyledAddProductForms>
			</StyledAddProductSteps>
		</StyledAddProductContainer>
	);
};

export { AddProducts };
