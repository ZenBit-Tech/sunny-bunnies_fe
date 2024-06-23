import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { colors, fontSizes } from "~/libs/constants/index.ts";

const ProfileCard: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<Typography fontSize={20} variant="playfairDisplay">
				{t("Profile.paymentMethod")}
			</Typography>
			<Box
				alignItems="center"
				display="flex"
				justifyContent="space-between"
				maxWidth="400px"
			>
				<Box display="flex" flexDirection="column" gap="8px">
					<Typography fontSize={fontSizes.medium} variant="playfairDisplay">
						Card
					</Typography>
					<Typography color={colors.gray} variant="body1">
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
