import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { Loader } from "~/components/index.ts";
import { userRole } from "~/libs/constants/user-role.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { type RootState } from "~/redux/store.ts";
import { useGetVendorByIdQuery } from "~/redux/user/user-api.ts";

import {
	VendorAvatarSection,
	VendorsProductsAndReviews,
} from "./components/index.ts";
import { StyledVendorProfileContainer } from "./styles.ts";

const VendorProfile: React.FC = () => {
	const { id } = useParams();
	const { t } = useTranslation();

	const user = useAppSelector((state: RootState) => state.auth.user);
	const [hasAccess, setHasAccess] = useState(false);
	const [serverError, setServerError] = useState("");
	const { data: vendor, error, isError, isLoading } = useGetVendorByIdQuery(id);

	useEffect(() => {
		if (user && user?.profile?.role === userRole.BUYER) {
			setHasAccess(true);
		}
		if (error) {
			const err = (error as FetchBaseQueryError).data as Error;
			setServerError(err.message);
		}
	}, [error, user]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<StyledVendorProfileContainer>
			{!hasAccess && (
				<Box
					alignItems="center"
					display="flex"
					justifyContent="center"
					width="100%"
				>
					<Typography textAlign="center" variant="playfairDisplayBold">
						{t("VendorProfilePage.dontHaveAccess")}
					</Typography>
				</Box>
			)}
			{isError && hasAccess && (
				<Box
					alignItems="center"
					display="flex"
					height="45%"
					justifyContent="center"
					width="100%"
				>
					<Typography textAlign="center" variant="playfairDisplayBold">
						{serverError}
					</Typography>
				</Box>
			)}
			{vendor && hasAccess && (
				<>
					<VendorAvatarSection
						averageRating={vendor?.averageRating}
						vendorId={vendor.id}
						vendorName={vendor.name}
						vendorPhoto={vendor?.profile.profilePhoto as string}
					/>
					<VendorsProductsAndReviews
						products={vendor.products}
						reviews={vendor.reviewsReceived}
						vendorName={vendor.name}
					/>
				</>
			)}
		</StyledVendorProfileContainer>
	);
};

export { VendorProfile };
