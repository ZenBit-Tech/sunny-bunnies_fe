import { t } from "i18next";

import { AppRoute } from "~/libs/constants/index.ts";

const addProductTabRoutes = [
	{
		label: t("AddVendorProduct.productPhotos"),
		number: 1,
		route: AppRoute.PRODUCT_PHOTOS,
	},
	{
		label: t("AddVendorProduct.categoryAndType"),
		number: 2,
		route: AppRoute.PRODUCT_CATEGORY,
	},
	{
		label: t("AddVendorProduct.productDescription"),
		number: 3,
		route: AppRoute.PRODUCT_DESCRIPTION,
	},
	{
		label: t("AddVendorProduct.finishAndPublish"),
		number: 4,
		route: AppRoute.PRODUCT_FINISH,
	},
];

export { addProductTabRoutes };
