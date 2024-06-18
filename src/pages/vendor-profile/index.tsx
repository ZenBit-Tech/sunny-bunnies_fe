import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { useGetVendorByIdQuery } from "~/redux/user/user-api.ts";

import {
	VendorAvatarSection,
	VendorsProductsAndReviews,
} from "./components/index.ts";
import { StyledVendorProfileContainer } from "./styles.ts";

const VendorProfile: React.FC = () => {
	const { id } = useParams();
	const { t } = useTranslation();

	const { data: vendor, isError } = useGetVendorByIdQuery(id);

	if (!vendor || isError) {
		return (
			<Typography variant="playfairDisplayBold">
				{t("VendorProfilePage.vendorWasNotFound")}
			</Typography>
		);
	}

	return (
		<StyledVendorProfileContainer>
			<VendorAvatarSection vendorName={vendor.name} />
			<VendorsProductsAndReviews
				products={vendor.products}
				reviews={vendor.reviews}
				vendorName={vendor.name}
			/>
		</StyledVendorProfileContainer>
	);
};

export { VendorProfile };
