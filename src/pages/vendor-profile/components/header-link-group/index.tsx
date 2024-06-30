import React from "react";
import { useTranslation } from "react-i18next";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { AppRoute, colors, fontSizes } from "~/libs/constants/index.ts";

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
				sx={{ color: colors.gray, fontSize: fontSizes.xs, height: "100%" }}
			/>
			<StyledHeaderLink href={AppRoute.HOME}>
				{t("VendorProfilePage.vendors")}
			</StyledHeaderLink>
			<ArrowForwardIosIcon
				sx={{ color: colors.gray, fontSize: fontSizes.xs, height: "100%" }}
			/>
			<StyledHeaderLink>{vendorName}</StyledHeaderLink>
		</StyledHeaderLinksGroup>
	);
};

export { HeaderLinksGroup };
