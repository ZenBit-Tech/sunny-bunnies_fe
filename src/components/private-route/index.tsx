import React from "react";
import { Navigate, Outlet, matchPath, useLocation } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { RootState } from "~/redux/store.ts";

const PrivateRoute: React.FC = () => {
	const { pathname } = useLocation();
	const user = useAppSelector((state: RootState) => state.auth.user);

	if (!user) return <Navigate to={AppRoute.HOME} />;

	if (user) {
		if (!user.isVerified && !matchPath(pathname, AppRoute.VERIFY_EMAIL))
			return <Navigate to={AppRoute.VERIFY_EMAIL} />;

		if (user.isVerified && matchPath(pathname, AppRoute.VERIFY_EMAIL))
			return <Navigate to={AppRoute.HOME} />;

		if (!user.profile.role) return <Outlet />;

		// if (user.profile.isRegistrationCompleted)
		// 	return <Navigate to={AppRoute.HOME} />;
	}

	return <Outlet />;
};

export { PrivateRoute };
