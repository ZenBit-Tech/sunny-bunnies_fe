import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { RootState } from "~/redux/store.ts";

import { RegisterWrapper } from "../register-wrapper/register-wrapper.tsx";

type Properties = {
	component: React.ReactNode;
};

const RegisterRoute: React.FC<Properties> = ({ component }: Properties) => {
	const user = useAppSelector((state: RootState) => state.auth.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			if (user.profile.isRegistrationCompleted) {
				return navigate(AppRoute.HOME);
			}

			if (!user.profile.role) {
				return navigate(AppRoute.ROLE);
			}
		}
	}, [user, navigate]);

	if (!user) {
		return <Navigate to={AppRoute.HOME} />;
	}

	return <RegisterWrapper>{component}</RegisterWrapper>;
};

export { RegisterRoute };
