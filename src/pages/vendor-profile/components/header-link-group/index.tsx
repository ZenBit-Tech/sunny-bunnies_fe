import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import { useTranslation } from "react-i18next";

import { AppRoute } from "~/libs/constants/app-route.ts";

import { StyledHeaderLink, StyledHeaderLinksGroup } from "./styles.ts";

type HeaderLinksGroupProperties = {
	vendorName: string;
};
const HeaderLinksGroup: React.FC<HeaderLinksGroupProperties> = ({
	vendorName,
}) => {
	const { t } = useTranslation();

	return (
		<StyledHeaderLinksGroup>
			<StyledHeaderLink href={AppRoute.HOME}>
				{t("VendorProfilePage.home")}
			</StyledHeaderLink>
			<ArrowForwardIosIcon
				color="secondary"
				sx={{ fontSize: "12px", height: "100%" }}
			/>
			<StyledHeaderLink href={AppRoute.HOME}>
				{t("VendorProfilePage.vendors")}
			</StyledHeaderLink>
			<ArrowForwardIosIcon
				color="secondary"
				sx={{ fontSize: "12px", height: "100%" }}
			/>
			<StyledHeaderLink>{vendorName}</StyledHeaderLink>
		</StyledHeaderLinksGroup>
	);
};

export { HeaderLinksGroup };