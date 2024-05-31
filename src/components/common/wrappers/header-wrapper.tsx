import React, { useCallback } from "react";
import { Outlet, matchPath, useLocation } from "react-router-dom";

import { Header } from "~/components/Header/Header.tsx";
import { AppRoute } from "~/libs/enum/index.ts";

const NoHeaderRoutes = [AppRoute.ROOT, AppRoute.SIGN_UP, AppRoute.SIGN_IN];
const GetStartedHeaderRoutes = [
	AppRoute.TERMS_OF_USE,
	AppRoute.HOME,
	AppRoute.PRIVACY_POLICY,
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
