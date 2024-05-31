import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks/index.ts";
import { RootState } from "~/redux/store.ts";

const PrivateRoute: React.FC = () => {
	const user = useAppSelector((state: RootState) => state.auth.user);

	return user ? <Outlet /> : <Navigate to={AppRoute.HOME} />;
};

export { PrivateRoute };