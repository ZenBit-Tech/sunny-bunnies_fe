import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { StyledAddressBox, StyledButton } from "./styles.ts";

const ProfileAddress: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<Typography fontSize={20} variant="playfairDisplay">
				{t("Profile.address")}
			</Typography>

			<StyledAddressBox>
				<Typography variant="playfairDisplay">Street 3</Typography>
				<Box>
					<Typography variant="body2">
						South Banasree Road No: 5/2 Blog (D)
					</Typography>
					<Typography variant="body2">Unity Aid</Typography>
					<Typography variant="body2">Toronto, Canada</Typography>
					<Typography variant="body2">Postcode</Typography>
				</Box>
				<StyledButton variant="outlined">Edit</StyledButton>
			</StyledAddressBox>
		</>
	);
};

export { ProfileAddress };
