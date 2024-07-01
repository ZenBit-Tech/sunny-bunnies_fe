import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { Typography } from "@mui/material";

import { AppRoute } from "~/libs/constants/app-route.ts";

import {
	ProfileForm,
	ProfileMenu,
	ProfileOrders,
	ProfileSettings,
	ProfileSupport,
	ProfileWishlist,
} from "./components/index.ts";
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
			default: {
				return <ProfileForm />;
			}
		}
	};

	return (
		<StyledProfileContainer>
			<Typography variant="playfairDisplayTitle">
				{t("Profile.myProfile")}
			</Typography>
			<StyledGrid container>
				<ProfileMenu />
				{getScreen(pathname)}
			</StyledGrid>
		</StyledProfileContainer>
	);
};

export { Profile };
