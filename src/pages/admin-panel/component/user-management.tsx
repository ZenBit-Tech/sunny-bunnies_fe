import React from "react";

import { Box, Typography } from "@mui/material";
import { t } from "i18next";

import theme from "~/theme.ts";

import { StyledContainer } from "./style.ts";

const UserManagement: React.FC = () => {
	return (
		<StyledContainer>
			<Typography
				sx={{
					fontFamily: theme.typography.playfairDisplayBold,
					fontSize: theme.fontSizes.medium,
					mb: 2,
				}}
			>
				{t("AdminPage.users")}
			</Typography>
			<Box sx={{ backgroundColor: theme.palette.white, p: "24px" }} />
		</StyledContainer>
	);
};

export { UserManagement };
