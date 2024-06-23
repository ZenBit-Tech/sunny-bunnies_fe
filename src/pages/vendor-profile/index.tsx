import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useParams } from "react-router-dom";

import { Loader } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
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

	const [hasAccess, setHasAccess] = useState(false);
	const user = useAppSelector((state: RootState) => state.auth.user);
	const { data: vendor, isError, isLoading } = useGetVendorByIdQuery(id);

	useEffect(() => {
		if (user && user?.profile?.role === userRole.BUYER) {
			setHasAccess(true);
		}
	}, [user]);

	if (!hasAccess) {
		return <Navigate to={AppRoute.HOME} />;
	}

	if (isLoading) {
		return <Loader />;
	}

	return (
		<StyledVendorProfileContainer>
			{isError && hasAccess && (
				<Box
					alignItems="center"
					display="flex"
					justifyContent="center"
					width="100%"
				>
					<Typography textAlign="center" variant="playfairDisplayBold">
						{t("VendorProfilePage.vendorWasNotFound")}
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
