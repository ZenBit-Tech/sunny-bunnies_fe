import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { RootState } from "~/redux/store.ts";

const PublicRoute: React.FC = () => {
	const user = useAppSelector((state: RootState) => state.auth.user);

	if (!user) return <Outlet />;

	if (!user.isVerified) return <Navigate to={AppRoute.VERIFY_EMAIL} />;

	return <Navigate to={AppRoute.HOME} />;
};

export { PublicRoute };
