import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { Tabs, Typography } from "@mui/material";

import { ProfileMenu, TabsBoard } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { useGetCategoriesQuery } from "~/redux/categories/categories-api.ts";
import theme from "~/theme.ts";

import { ImageUpload } from "./components/first-step/index.tsx";
import { SecondStepForm } from "./components/second-step/index.tsx";
import { ThirdStepForm } from "./components/third-step/index.tsx";
import { addProductTabRoutes } from "./constants/routes.ts";
import { useProductData } from "./hooks/useProductData.ts";
import {
	StyledContainer,
	StyledContentBox,
	StyledGrid,
	StyledMainGrid,
	StyledProfileContainer,
	StyledTab,
	StyledTabsBox,
} from "./styles.ts";

const AddProducts: React.FC = () => {
	const { t } = useTranslation();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const { product, setFirstStepData, setSecondStepData, setThirdStepData } =
		useProductData();

	const { data } = useGetCategoriesQuery(undefined);

	const getScreen = (screen: string): React.ReactNode => {
		switch (screen) {
			case AppRoute.PRODUCT_PHOTOS:
				return (
					<ImageUpload
						defaultImages={product.images}
						setFirstStepData={setFirstStepData}
					/>
				);
			case AppRoute.PRODUCT_CATEGORY:
				return (
					<SecondStepForm
						categories={data}
						category={product.category}
						setSecondStepData={setSecondStepData}
						style={product.style}
						type={product.type}
					/>
				);
			case AppRoute.PRODUCT_DESCRIPTION:
				return (
					<ThirdStepForm
						brand={product.brand}
						category={product!.category}
						description={product.description}
						material={product.material}
						name={product.name}
						setThirdStepData={setThirdStepData}
					/>
				);
			case AppRoute.PRODUCT_VARIANTS:
				return <div />;
			case AppRoute.PRODUCT_PUBLISH:
				return <div />;
			default:
				return <div />;
		}
	};

	const handleTabChange = useCallback(
		(_event: React.SyntheticEvent, newValue: string): void => {
			navigate(newValue);
		},
		[navigate],
	);

	return (
		<StyledProfileContainer>
			<StyledGrid container>
				<ProfileMenu />
				<StyledContainer>
					<StyledMainGrid bgcolor={theme.palette.gray} container>
						<Typography variant="playfairDisplayTitle">
							{t("AddVendorProduct.addProduct")}
						</Typography>
						<StyledTabsBox>
							<Tabs
								aria-label="profile tabs"
								onChange={handleTabChange}
								scrollButtons="auto"
								value={pathname}
								variant="scrollable"
							>
								{addProductTabRoutes.map((tab) => (
									<StyledTab
										key={tab.route}
										label={
											<TabsBoard
												label={tab.label}
												number={tab.number}
												tabRoute={tab.route}
												tabRoutes={addProductTabRoutes}
											/>
										}
										value={tab.route}
									/>
								))}
							</Tabs>
							<StyledContentBox>{getScreen(pathname)}</StyledContentBox>
						</StyledTabsBox>
					</StyledMainGrid>
				</StyledContainer>
			</StyledGrid>
		</StyledProfileContainer>
	);
};

export { AddProducts };
