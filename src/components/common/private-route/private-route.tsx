import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { RootState } from "~/redux/store.ts";

const PrivateRoute: React.FC = () => {
	const token = useSelector((state: RootState) => state.auth.accessToken);

	return token ? <Outlet /> : <Navigate to="/" />;
};

export { PrivateRoute };
