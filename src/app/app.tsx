import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useGetUser } from "~/libs/hooks/index.ts";
import { useAppSelector } from "~/redux/hooks/index.ts";
import { type RootState } from "~/redux/store.ts";

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
