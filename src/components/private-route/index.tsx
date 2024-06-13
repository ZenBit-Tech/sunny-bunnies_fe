import React from "react";
import { Navigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { RootState } from "~/redux/store.ts";

import { AuthWrapper } from "../auth-wrapper/auth-wrapper.tsx";

type Properties = {
	component: React.ReactNode;
};

const PrivateRoute: React.FC<Properties> = ({ component }: Properties) => {
	const user = useAppSelector((state: RootState) => state.auth.user);

	return user ? (
		<AuthWrapper>{component}</AuthWrapper>
	) : (
		<Navigate to={AppRoute.HOME} />
	);
};

export { PrivateRoute };
