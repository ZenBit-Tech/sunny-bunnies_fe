import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Tab, Tabs, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import theme from "~/theme.ts";
import { TabsBoard, ProfileMenu } from "~/components";
import {AppRoute} from "~/libs/constants";

import { addProductTabRoutes } from "./constants/routes.ts";
import {ImageUpload} from "./components/first-step";
import {
    StyledContainer,
    StyledGrid,
    StyledProfileContainer,
    StyledContentBox,
    StyledTabsBox,
    StyledMainGrid
} from "./styles.ts";

const AddProducts: React.FC = () => {
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const getScreen = (screen: string): React.ReactNode => {
        switch (screen) {
            case AppRoute.PRODUCT_PHOTOS:
                return <ImageUpload/>;
            case AppRoute.PRODUCT_CATEGORY:
                return <div></div>;
            case AppRoute.PRODUCT_DESCRIPTION:
                return <div></div>;
            case AppRoute.PRODUCT_VARIANTS:
                return <div></div>;
            case AppRoute.PRODUCT_PUBLISH:
                return <div></div>;
            default:
                return <div></div>;
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
                    <StyledMainGrid
                        bgcolor={theme.palette.gray}
                        container
                    >
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
                            <StyledContentBox>
                                {getScreen(pathname)}
                            </StyledContentBox>
                        </StyledTabsBox>
                    </StyledMainGrid>
                </StyledContainer>
            </StyledGrid>
        </StyledProfileContainer>
    );
};

export { AddProducts };
