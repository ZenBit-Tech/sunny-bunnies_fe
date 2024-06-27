import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { AppRoute } from "~/libs/constants/app-route.ts";
import theme from "~/theme.ts";

import {
	ProfileForm,
	ProfileMenu,
	ProfileOrders,
	ProfileSettings,
	ProfileSupport,
	ProfileWishlist,
} from "./components/index.ts";

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
		<Box
			sx={{ backgroundColor: `${theme.palette.lightGray}`, padding: "32px" }}
		>
			<Typography variant="playfairDisplayTitle">
				{t("Profile.myProfile")}
			</Typography>
			<Grid
				container
				sx={{
					backgroundColor: `${theme.palette.white}`,
					borderRadius: "10px",
					marginTop: "24px",
				}}
			>
				<ProfileMenu />
				{getScreen(pathname)}
			</Grid>
		</Box>
	);
};

export { Profile };
