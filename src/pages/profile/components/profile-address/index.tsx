import { Box, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { AddressModal } from "../address-modal/address-modal.tsx";
import { StyledAddressBox, StyledButton } from "./styles.ts";

type ProfileAddressProps = {
	addressLine: string;
	city: string;
	country: string;
	state: string;
};

const ProfileAddress: React.FC<ProfileAddressProps> = ({
	addressLine,
	city,
	country,
	state,
}) => {
	const { t } = useTranslation();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const isData = addressLine && city && country;

	const toggleModal = useCallback((): void => {
		setIsModalOpen((prev) => !prev);
	}, []);

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
				<StyledButton onClick={toggleModal} variant="outlined">
					Edit
				</StyledButton>
				<AddressModal
					addressLine={addressLine}
					city={city}
					country={country}
					isModalOpen={isModalOpen}
					state={state}
				/>
			</StyledAddressBox>
		</>
	);
};

export { ProfileAddress };
