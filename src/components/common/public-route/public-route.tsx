import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { AppRoute } from "~/libs/enum/index.ts";
import { RootState } from "~/redux/store.ts";

const PublicRoute: React.FC = () => {
	const user = useSelector((state: RootState) => state.auth.user);

	return user ? <Navigate to={AppRoute.HOME} /> : <Outlet />;
};

export { PublicRoute };
