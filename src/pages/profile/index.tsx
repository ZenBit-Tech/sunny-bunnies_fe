import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { ProfileMenu } from "~/components/profile-menu/index.tsx";
import { AppRoute } from "~/libs/constants/app-route.ts";

import {
	ProfileForm,
	ProfileOrders,
	ProfileSettings,
	ProfileSupport,
	ProfileWishlist,
} from "./components/index.ts";
import { titles } from "./constats.ts";
import { StyledGrid, StyledProfileContainer } from "./styles.ts";

const Profile: React.FC = () => {
	const { pathname } = useLocation();
	const { t } = useTranslation();

	const getScreen = (screen: string): React.ReactNode => {
		switch (screen) {
			case AppRoute.PROFILE: {
				return <ProfileForm />;
			}
			case AppRoute.PROFILE_ORDERS: {
				return <ProfileOrders />;
			}
			case AppRoute.PROFILE_WISHLIST: {
				return <ProfileWishlist />;
			}
			case AppRoute.PROFILE_SETTINGS: {
				return <ProfileSettings />;
			}
			case AppRoute.PROFILE_SUPPORT: {
				return <ProfileSupport />;
			}
			case AppRoute.PROFILE_PRODUCTS: {
				return <ProfileSupport />;
			}
			default: {
				return <ProfileForm />;
			}
		}
	};

	return (
		<StyledProfileContainer>
			<Box sx={{ marginBottom: "32px", textAlign: "center", width: "100%" }}>
				<Typography variant="playfairDisplayTitle">
					{titles[pathname] || t("Profile.myProfile")}
				</Typography>
			</Box>
			<StyledGrid container>
				<ProfileMenu />
				{getScreen(pathname)}
			</StyledGrid>
		</StyledProfileContainer>
	);
};

export { Profile };
