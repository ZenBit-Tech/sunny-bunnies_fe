import { Avatar, Box, Typography } from "@mui/material";
import { format } from "date-fns";
import React from "react";

import StarRatingIcon from "~/assets/icons/star-rating-icon.svg?react";
import { colors, fontSizes } from "~/libs/constants/index.ts";
import { type Review } from "~/libs/types/vendor.ts";

import {
	StyledBuyerRating,
	StyledRatingIcon,
	StyledReviewContent,
	StyledReviewItemBuyerData,
	StyledReviewItemContainer,
} from "./styles.ts";

type ReviewItemProperties = {
	review: Review;
};

const ReviewItem: React.FC<ReviewItemProperties> = ({ review }) => {
	const updatedAtDate = new Date(review.updatedAt);
	const formattedDate = format(updatedAtDate, "MMM d, yyyy");

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
				<Typography
					sx={{ color: colors.smallTextGray, fontSize: fontSizes.xs }}
					variant="dmSans"
				>
					{review.review}
				</Typography>
			</StyledReviewContent>
		</StyledReviewItemContainer>
	);
};

export { ReviewItem };
