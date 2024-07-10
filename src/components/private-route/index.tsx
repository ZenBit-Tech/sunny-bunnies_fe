import React from "react";
import { Navigate, Outlet, matchPath, useLocation } from "react-router-dom";

import { AppRoute, registerRoute } from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { RootState } from "~/redux/store.ts";

const PrivateRoute: React.FC = () => {
	const { pathname } = useLocation();
	const user = useAppSelector((state: RootState) => state.auth.user);
	const isRegisterRoute = registerRoute.some((route) =>
		matchPath(pathname, route),
	);

	if (!user) return <Navigate to={AppRoute.HOME} />;

	if (user) {
		if (!user.isVerified && !matchPath(pathname, AppRoute.VERIFY_EMAIL))
			return <Navigate to={AppRoute.VERIFY_EMAIL} />;

		if (user.isVerified && matchPath(pathname, AppRoute.VERIFY_EMAIL))
			return <Navigate to={AppRoute.HOME} />;

		if (!user.profile.role && !isRegisterRoute)
			return <Navigate to={AppRoute.ROLE} />;

		if (!user.profile.isRegistrationCompleted && !isRegisterRoute)
			return <Navigate to={AppRoute.GENERAL_INFORMATION} />;
	}

	return <Outlet />;
};

export { PrivateRoute };
