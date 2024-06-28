import React from "react";
import { useTranslation } from "react-i18next";

import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

const ProfileCard: React.FC = () => {
	const { t } = useTranslation();
	const theme = useTheme();

	return (
		<>
			<Typography fontSize={theme.fontSizes.large} variant="playfairDisplay">
				{t("Profile.paymentMethod")}
			</Typography>
			<Box
				alignItems="center"
				display="flex"
				justifyContent="space-between"
				maxWidth="400px"
			>
				<Box display="flex" flexDirection="column" gap="8px">
					<Typography
						fontSize={theme.fontSizes.medium}
						variant="playfairDisplay"
					>
						Card
					</Typography>
					<Typography color={theme.palette.fontGray} variant="body1">
						**** **** **** 4567
					</Typography>
				</Box>
				<IconButton>
					<EditIcon />
				</IconButton>
			</Box>
		</>
	);
};

export { ProfileCard };
