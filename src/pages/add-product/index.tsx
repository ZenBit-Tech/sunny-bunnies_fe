import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { Tab, Tabs, Typography } from "@mui/material";

import { ProfileMenu, TabsBoard } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import theme from "~/theme.ts";

import { ImageUpload } from "./components/first-step/index.tsx";
import { addProductTabRoutes } from "./constants/routes.ts";
import {
	StyledContainer,
	StyledContentBox,
	StyledGrid,
	StyledMainGrid,
	StyledProfileContainer,
	StyledTabsBox,
} from "./styles.ts";

const AddProducts: React.FC = () => {
	const { t } = useTranslation();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const getScreen = (screen: string): React.ReactNode => {
		switch (screen) {
			case AppRoute.PRODUCT_PHOTOS:
				return <ImageUpload />;
			case AppRoute.PRODUCT_CATEGORY:
				return <div />;
			case AppRoute.PRODUCT_DESCRIPTION:
				return <div />;
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
							<StyledContentBox>{getScreen(pathname)}</StyledContentBox>
						</StyledTabsBox>
					</StyledMainGrid>
				</StyledContainer>
			</StyledGrid>
		</StyledProfileContainer>
	);
};

export { AddProducts };
