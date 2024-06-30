import React from "react";
import { useTranslation } from "react-i18next";

import { Avatar, Box, Typography } from "@mui/material";

import StarRatingIcon from "~/assets/icons/star-rating-icon.svg?react";
import { BaseButton } from "~/components/index.ts";
import { fontSizes } from "~/libs/constants/fonts.ts";
import { useFollowHandler } from "~/pages/vendor-profile/hooks/index.ts";

import { HeaderLinksGroup } from "../index.ts";
import {
	StyledRatingContainer,
	StyledRatingIcon,
	StyledVendorProfileData,
} from "./styles.ts";

type VendorAvatarSectionProperties = {
	averageRating?: number;
	vendorId: string;
	vendorName: string;
	vendorPhoto: string;
};

const VendorAvatarSection: React.FC<VendorAvatarSectionProperties> = ({
	averageRating,
	vendorId,
	vendorName,
	vendorPhoto,
}) => {
	const { t } = useTranslation();

	const { handleFollowClick, isFollowing, serverError } =
		useFollowHandler(vendorId);

	return (
		<StyledVendorProfileData>
			<HeaderLinksGroup vendorName={vendorName} />
			<Box
				alignItems="center"
				display="flex"
				flexDirection="column"
				gap={2}
				sx={{ margin: "0 auto" }}
			>
				<Avatar
					alt={vendorName}
					src={vendorPhoto}
					sx={{
						height: "120px",
						width: "120px",
					}}
				/>
				<Typography fontSize={fontSizes.large} variant="playfairDisplayTitle">
					{vendorName}
				</Typography>
				<StyledRatingContainer>
					<StyledRatingIcon>
						<StarRatingIcon />
					</StyledRatingIcon>
					<Typography fontSize={fontSizes.medium} variant="playfairDisplay">
						{averageRating
							? averageRating
							: t("VendorProfilePage.noRatingsYet")}
					</Typography>
				</StyledRatingContainer>
			</Box>
			<BaseButton
				onClick={handleFollowClick}
				sx={{ height: "53px", margin: "0 auto", width: "196px" }}
				variant="primary_black_regular"
			>
				{isFollowing
					? t("VendorProfilePage.unFollow")
					: t("VendorProfilePage.follow")}
			</BaseButton>
			{serverError && (
				<Typography color="error" variant="dmSans">
					{serverError}
				</Typography>
			)}
		</StyledVendorProfileData>
	);
};

export { VendorAvatarSection };
