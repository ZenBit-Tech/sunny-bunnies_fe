import { Avatar, Box, Typography } from "@mui/material";
import { format } from "date-fns";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import StarRatingIcon from "~/assets/icons/star-rating-icon.svg?react";
import { colors, fontSizes } from "~/libs/constants/index.ts";
import { type Review } from "~/libs/types/vendor.ts";

import {
	StyledBuyerRating,
	StyledRatingIcon,
	StyledReadMoreLessButton,
	StyledReviewContent,
	StyledReviewItemBuyerData,
	StyledReviewItemContainer,
} from "./styles.ts";

const maxReviewLength = 150;
const zeroIndex = 0;

type ReviewItemProperties = {
	review: Review;
};

const ReviewItem: React.FC<ReviewItemProperties> = ({ review }) => {
	const { t } = useTranslation();

	const updatedAtDate = new Date(review.updatedAt);
	const formattedDate = format(updatedAtDate, "MMM d, yyyy");
	const [isReviewExpanded, setIsReviewExpanded] = useState(false);
	const [isReviewLarge, setIsReviewLarge] = useState(false);

	useEffect(() => {
		setIsReviewLarge(review.review.length > maxReviewLength);
	}, [review]);

	const toggleExpanded = useCallback((): void => {
		setIsReviewExpanded(!isReviewExpanded);
	}, [isReviewExpanded]);

	const shortenReview = useCallback((reviewText: string): string => {
		if (reviewText.length > maxReviewLength) {
			return reviewText.slice(zeroIndex, maxReviewLength);
		}

		return reviewText;
	}, []);

	return (
		<StyledReviewItemContainer>
			<StyledReviewItemBuyerData>
				<Avatar
					alt={review.reviewUser.name}
					src={review.reviewUser.profile.profilePhoto as string}
					sx={{
						height: "72px",
						width: "72px",
					}}
				/>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Typography
						sx={{ fontSize: fontSizes.small, textTransform: "capitalize" }}
						variant="playfairDisplayBold"
					>
						{review.reviewUser.name}
					</Typography>
					<Typography
						sx={{ color: colors.smallTextGray, fontSize: fontSizes.xs }}
						variant="dmSans"
					>
						{formattedDate}
					</Typography>
				</Box>
				{review.rating && (
					<StyledBuyerRating sx={{ display: "flex", gap: "4px" }}>
						<StyledRatingIcon>
							<StarRatingIcon />
						</StyledRatingIcon>
						<Typography
							sx={{ fontSize: fontSizes.medium }}
							variant="playfairDisplay"
						>
							{review.rating}
						</Typography>
					</StyledBuyerRating>
				)}
			</StyledReviewItemBuyerData>
			<StyledReviewContent>
				{!isReviewLarge ? (
					<Typography
						sx={{ color: colors.smallTextGray, fontSize: fontSizes.xs }}
						variant="dmSans"
					>
						{review.review}
					</Typography>
				) : (
					<>
						<Typography
							sx={{
								color: colors.smallTextGray,
								fontSize: fontSizes.xs,
								paddingRight: "12px",
							}}
							variant="dmSans"
						>
							{isReviewExpanded ? review.review : shortenReview(review.review)}
						</Typography>
						{!isReviewExpanded && isReviewLarge && (
							<StyledReadMoreLessButton onClick={toggleExpanded} variant="text">
								{t("VendorProfilePage.readMore")}
							</StyledReadMoreLessButton>
						)}
						{isReviewExpanded && isReviewLarge && (
							<StyledReadMoreLessButton onClick={toggleExpanded} variant="text">
								{t("VendorProfilePage.readLess")}
							</StyledReadMoreLessButton>
						)}
					</>
				)}
			</StyledReviewContent>
		</StyledReviewItemContainer>
	);
};

export { ReviewItem };
