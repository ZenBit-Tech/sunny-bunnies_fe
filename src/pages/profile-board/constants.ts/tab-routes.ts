import { t } from "i18next";

import { AppRoute } from "~/libs/constants/index.ts";

const tabRoutes = [
	{ label: t("FormTabs.role"), number: 1, route: AppRoute.ROLE },
	{
		label: t("FormTabs.general"),
		number: 2,
		route: AppRoute.GENERAL_INFORMATION,
	},
	{ label: t("FormTabs.addresss"), number: 3, route: AppRoute.ADDRESS },
	{ label: t("FormTabs.card"), number: 4, route: AppRoute.CREDIT_CARD },
	{ label: t("FormTabs.size"), number: 5, route: AppRoute.SIZE },
];

export { tabRoutes };
