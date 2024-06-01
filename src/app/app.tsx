import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "~/redux/hooks.ts";
import { type RootState } from "~/redux/store.ts";

import { useGetUser } from "./hooks.ts";

const App: React.FC = () => {
	const { refetch } = useGetUser();
	const user = useAppSelector((state: RootState) => state.auth.user);

	useEffect(() => {
		if (!user) {
			refetch();
		}
	}, [user, refetch]);

	return (
		<>
			<Outlet />
		</>
	);
};

export { App };
