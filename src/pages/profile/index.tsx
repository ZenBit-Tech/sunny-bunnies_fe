import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import { colors } from "~/libs/constants/colors.ts";

import { ProfileForm, ProfileMenu } from "./components/index.ts";

const Profile: React.FC = () => {
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
				<ProfileForm />
			</Grid>
		</Box>
	);
};

export { Profile };
