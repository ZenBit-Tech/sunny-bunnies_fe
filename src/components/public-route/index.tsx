import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { RootState } from "~/redux/store.ts";

import { PublicWrapper } from "../public-wrapper/public-wrapper.tsx";

type Properties = {
	component: React.ReactNode;
};

const PublicRoute: React.FC<Properties> = ({ component }: Properties) => {
	const navigate = useNavigate();
	const user = useAppSelector((state: RootState) => state.auth.user);

	useEffect(() => {
		if (user) {
			if (!user.profile.role) {
				return navigate(AppRoute.ROLE);
			}

			if (!user.profile.isRegistrationCompleted) {
				return navigate(AppRoute.ADDRESS);
			}
		}
	}, [user, navigate]);

	return <PublicWrapper>{component}</PublicWrapper>;
};

export { PublicRoute };
