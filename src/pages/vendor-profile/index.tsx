import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

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

	const [hasAccess, setHasAccess] = useState(true);
	const user = useAppSelector((state: RootState) => state.auth.user);
	const { data: vendor, isError } = useGetVendorByIdQuery(id);

	useEffect(() => {
		if (user?.profile.role === "buyer") {
			setHasAccess(true);
		}
	}, [user]);

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
			{(!vendor || isError) && hasAccess && (
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
					<VendorAvatarSection vendorName={vendor.name} />
					<VendorsProductsAndReviews
						products={vendor.products}
						reviews={vendor.reviews}
						vendorName={vendor.name}
					/>
				</>
			)}
		</StyledVendorProfileContainer>
	);
};

export { VendorProfile };
