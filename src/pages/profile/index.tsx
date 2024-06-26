import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

import { AppRoute } from "~/libs/constants/app-route.ts";
import { colors } from "~/libs/constants/colors.ts";

import {
	ProfileForm,
	ProfileMenu,
	ProfileSettings,
	ProfileSupport,
} from "./components/index.ts";

const Profile: React.FC = () => {
	const { pathname } = useLocation();

	const getScreen = (screen: string): React.ReactNode => {
		switch (screen) {
			case AppRoute.PROFILE: {
				return <ProfileForm />;
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
		<Box sx={{ backgroundColor: `${colors.grayishRed}`, padding: "32px" }}>
			<Typography variant="playfairDisplayTitle">My Profile</Typography>
			<Grid
				container
				sx={{
					backgroundColor: `${colors.white}`,
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
