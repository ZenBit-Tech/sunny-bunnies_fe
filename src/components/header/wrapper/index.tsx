import React, { useCallback } from "react";
import { Outlet, matchPath, useLocation } from "react-router-dom";

import { Header } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/index.ts";

const NoHeaderRoutes = [
	AppRoute.ROOT,
	AppRoute.SIGN_UP,
	AppRoute.SIGN_IN,
	AppRoute.VERIFY_EMAIL,
];
const GetStartedHeaderRoutes = [
	AppRoute.TERMS_OF_USE,
	AppRoute.HOME,
	AppRoute.PRIVACY_POLICY,
	AppRoute.SIZE_GUIDE,
	AppRoute.PRODUCT,
	AppRoute.ROLE,
	AppRoute.GENERAL_INFORMATION,
	AppRoute.ADDRESS,
	AppRoute.CREDIT_CARD,
	AppRoute.SIZE,
	AppRoute.VENDORS_PROFILE,
	AppRoute.PROFILE,
	AppRoute.PROFILE_ORDERS,
	AppRoute.PROFILE_WISHLIST,
	AppRoute.PROFILE_SETTINGS,
	AppRoute.PROFILE_SUPPORT,
	AppRoute.PRODUCT_PHOTOS,
	AppRoute.PRODUCT_CATEGORY,
	AppRoute.PRODUCT_DESCRIPTION,
	AppRoute.PRODUCT_VARIANTS,
	AppRoute.PRODUCT_PUBLISH,
];

const HeaderWrapper: React.FC = () => {
	const location = useLocation();

	const handleHeader = useCallback(() => {
		if (NoHeaderRoutes.some((route) => matchPath(route, location.pathname))) {
			return null;
		}
		if (
			GetStartedHeaderRoutes.some((route) =>
				matchPath(route, location.pathname),
			)
		) {
			return <Header />;
		}
	}, [location]);

	return (
		<>
			{handleHeader()}
			<Outlet />
		</>
	);
};

export { HeaderWrapper };
