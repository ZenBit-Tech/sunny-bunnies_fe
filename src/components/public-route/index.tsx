import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { RootState } from "~/redux/store.ts";

const PublicRoute: React.FC = () => {
	const user = useAppSelector((state: RootState) => state.auth.user);

	if (!user) {
		return <Outlet />;
	}

	if (!user.isVerified) return <Navigate to={AppRoute.VERIFY_EMAIL} />;

	if (!user.profile.role) return <Navigate to={AppRoute.ROLE} />;

	if (!user.profile.isRegistrationCompleted)
		return <Navigate to={AppRoute.GENERAL_INFORMATION} />;

	return <Outlet />;
};

export { PublicRoute };
