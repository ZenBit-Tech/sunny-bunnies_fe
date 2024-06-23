import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { StyledAddressBox, StyledButton } from "./styles.ts";

type ProfileAddressProps = {
	addressLine?: string;
	city?: string;
	country?: string;
};

const ProfileAddress: React.FC<ProfileAddressProps> = ({
	addressLine,
	city,
	country,
}) => {
	const { t } = useTranslation();

	const isData = addressLine && city && country;

	return (
		<>
			<Typography fontSize={20} variant="playfairDisplay">
				{t("Profile.address")}
			</Typography>

			<StyledAddressBox>
				<Typography variant="playfairDisplay">Street</Typography>
				{isData ? (
					<Box>
						<Typography variant="body2">{addressLine}</Typography>
						<Typography variant="body2">
							{city}, {country}
						</Typography>
					</Box>
				) : (
					<Typography>{t("Profile.noAddress")}</Typography>
				)}
				<StyledButton variant="outlined">Edit</StyledButton>
			</StyledAddressBox>
		</>
	);
};

export { ProfileAddress };
