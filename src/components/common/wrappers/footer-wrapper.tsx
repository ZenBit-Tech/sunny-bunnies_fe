import React, { useCallback } from "react";
import { Outlet, matchPath, useLocation } from "react-router-dom";

import { Footer } from "~/components/Footer/Footer.tsx";
import { AppRoute } from "~/libs/constants/index.ts";

const NoFootersRoutes = [
	AppRoute.ROOT,
	AppRoute.SIGN_UP,
	AppRoute.SIGN_IN,
	AppRoute.ROLE,
	AppRoute.GENERAL_INFORMATION,
	AppRoute.ADDRESS,
	AppRoute.CREDIT_CARD,
	AppRoute.SIZE,
];
const GetStartedFooterRoutes = [
	AppRoute.TERMS_OF_USE,
	AppRoute.HOME,
	AppRoute.PRIVACY_POLICY,
	AppRoute.PRODUCT,
	AppRoute.SIZE_GUIDE,
	AppRoute.VENDOR_PROFILE,
];

const FooterWrapper: React.FC = () => {
	const location = useLocation();

	const handleFooter = useCallback(() => {
		if (NoFootersRoutes.some((route) => matchPath(route, location.pathname))) {
			return null;
		}
		if (
			GetStartedFooterRoutes.some((route) =>
				matchPath(route, location.pathname),
			)
		) {
			return <Footer />;
		}
	}, [location]);

	return (
		<>
			<Outlet />
			{handleFooter()}
		</>
	);
};

export { FooterWrapper };
