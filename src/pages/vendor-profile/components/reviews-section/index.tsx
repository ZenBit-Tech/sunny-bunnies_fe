import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { fontSizes } from "~/libs/constants/index.ts";
import { Review } from "~/libs/types/vendor.ts";

import { ReviewItem } from "../index.ts";
import { StyledReviewsContent, StyledReviewsSection } from "./styles.ts";

const zeroIndex = 0;

type ReviewsSectionProperties = {
	reviews: Review[];
};

const ReviewsSection: React.FC<ReviewsSectionProperties> = ({ reviews }) => {
	const { t } = useTranslation();

	return (
		<StyledReviewsSection>
			<Typography
				sx={{ fontSize: fontSizes.large }}
				variant="playfairDisplayTitle"
			>
				{`${t("VendorProfilePage.reviews")} (${reviews?.length})`}
			</Typography>
			{reviews.length === zeroIndex ? (
				<Typography
					sx={{ fontSize: fontSizes.medium }}
					variant="playfairDisplayTitle"
				>
					{t("VendorProfilePage.thisVendorDoesNotReceiveAnyReviewYet")}
				</Typography>
			) : (
				<StyledReviewsContent>
					{reviews.map((review) => (
						<ReviewItem key={review.id} review={review} />
					))}
				</StyledReviewsContent>
			)}
		</StyledReviewsSection>
	);
};

export { ReviewsSection };
