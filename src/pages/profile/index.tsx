import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import { ProfileMenu } from "./components/index.ts";

const Profile: React.FC = () => {
	return (
		<Box sx={{ p: 4 }}>
			<Typography variant="h4">My Profile</Typography>
			<Grid container spacing={4}>
				<ProfileMenu />
				<Grid>form</Grid>
			</Grid>
		</Box>
	);
};

export { Profile };
