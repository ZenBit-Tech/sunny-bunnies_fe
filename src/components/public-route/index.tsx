import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks/index.ts";
import { RootState } from "~/redux/store.ts";

const PublicRoute: React.FC = () => {
	const user = useAppSelector((state: RootState) => state.auth.user);

	return user ? <Navigate to={AppRoute.HOME} /> : <Outlet />;
};

export { PublicRoute };
