import { t } from "i18next";

import { AppRoute } from "~/libs/constants/index.ts";

const titles: Record<string, string> = {
	[AppRoute.PROFILE]: t("Profile.myProfile"),
	[AppRoute.PROFILE_ORDERS]: t("Profile.orders"),
	[AppRoute.PROFILE_PRODUCTS]: t("Profile.myProducts"),
	[AppRoute.PROFILE_SETTINGS]: t("Profile.settings"),
	[AppRoute.PROFILE_SUPPORT]: t("Profile.support"),
	[AppRoute.PROFILE_WISHLIST]: t("Profile.wishlist"),
};

export { titles };
