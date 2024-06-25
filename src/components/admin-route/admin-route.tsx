import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { RootState } from "~/redux/store.ts";

const AdminRoute: React.FC = () => {
	const role = "admin";
	const user = useAppSelector((state: RootState) => state.auth.user);

	if (!user) return <Navigate to={AppRoute.HOME} />;

	return user.profile.role === role ? (
		<Outlet />
	) : (
		<Navigate to={AppRoute.HOME} />
	);
};

export { AdminRoute };
