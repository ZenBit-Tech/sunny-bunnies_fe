import React from "react";
import { useTranslation } from "react-i18next";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { AppRoute } from "~/libs/constants/app-route.ts";

import { StyledHeaderLink, StyledHeaderLinksGroup } from "./styles.ts";

const HeaderLinksGroup: React.FC = () => {
	const { t } = useTranslation();

	return (
		<StyledHeaderLinksGroup>
			<StyledHeaderLink href={AppRoute.HOME}>
				{t("ProductPage.home")}
			</StyledHeaderLink>
			<ArrowForwardIosIcon
				color="secondary"
				sx={{ fontSize: "12px", height: "100%" }}
			/>
			<StyledHeaderLink href={AppRoute.HOME}>
				{t("ProductPage.productCategory")}
			</StyledHeaderLink>
			<ArrowForwardIosIcon
				color="secondary"
				sx={{ fontSize: "12px", height: "100%" }}
			/>
			<StyledHeaderLink>{t("ProductPage.productName")}</StyledHeaderLink>
		</StyledHeaderLinksGroup>
	);
};

export { HeaderLinksGroup };
