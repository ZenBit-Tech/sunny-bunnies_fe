import { Avatar, Box, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import StarRatingIcon from "~/assets/icons/star-rating-icon.svg?react";
import { BaseButton } from "~/components/index.ts";
import { fontSizes } from "~/libs/constants/fonts.ts";
import {
	useCheckFollowStatusQuery,
	useFollowMutation,
	useUnFollowMutation,
} from "~/redux/user/user-api.ts";

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

	const { data: followStatus } = useCheckFollowStatusQuery({
		userId: vendorId,
	});

	const [error, setError] = useState("");
	const [isFollowing, setIsFollowing] = useState(false);
	const [followMutation] = useFollowMutation();
	const [unfollowMutation] = useUnFollowMutation();

	useEffect(() => {
		if (followStatus) {
			setIsFollowing(followStatus);
		}
	}, [followStatus, vendorId]);

	const handleFollowClick = useCallback(async () => {
		try {
			if (isFollowing) {
				await unfollowMutation({ userId: vendorId });
			} else {
				await followMutation({ userId: vendorId });
			}
			setIsFollowing(!isFollowing);
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("An error occurred");
			}
		}
	}, [isFollowing, followMutation, unfollowMutation, vendorId]);

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
			{error && (
				<Typography color="error" variant="dmSans">
					{error}
				</Typography>
			)}
		</StyledVendorProfileData>
	);
};

export { VendorAvatarSection };
