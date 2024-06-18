import { Avatar, Box, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { BaseButton } from "~/components/index.ts";
import { fontSizes } from "~/libs/constants/fonts.ts";

import { HeaderLinksGroup } from "../index.ts";
import { StyledVendorProfileData } from "./styles.ts";

type VendorAvatarSectionProperties = {
	vendorName: string;
};

const VendorAvatarSection: React.FC<VendorAvatarSectionProperties> = ({
	vendorName,
}) => {
	const { t } = useTranslation();

	const [isFollowed, setIsFollowed] = useState(false);

	const handleFollowClick = useCallback(() => {
		setIsFollowed(!isFollowed);
	}, [isFollowed]);

	return (
		<StyledVendorProfileData>
			<HeaderLinksGroup vendorName={vendorName} />
			<Box alignItems="center" display="flex" flexDirection="column" gap={2}>
				<Avatar
					alt={vendorName}
					sx={{
						height: 120,
						width: 120,
					}}
				/>
				<Typography fontSize={fontSizes.large} variant="playfairDisplayTitle">
					{vendorName}
				</Typography>
			</Box>
			<BaseButton
				onClick={handleFollowClick}
				sx={{ height: "53px", width: "60%" }}
				variant="primary_black_regular"
			>
				{isFollowed
					? t("VendorProfilePage.follow")
					: t("VendorProfilePage.unFollow")}
			</BaseButton>
		</StyledVendorProfileData>
	);
};

export { VendorAvatarSection };
