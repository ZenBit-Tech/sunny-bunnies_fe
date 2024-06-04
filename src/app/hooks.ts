import { useEffect } from "react";

import { useGetUserQuery } from "~/redux/auth/auth-api.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/hooks.ts";

type UseGetUserResult = {
	isError: boolean;
	isLoading: boolean;
	refetch: () => void;
};

const useGetUser = (): UseGetUserResult => {
	const dispatch = useAppDispatch();
	const {
		data: userData,
		isError,
		isLoading,
		refetch,
	} = useGetUserQuery(undefined);

	useEffect(() => {
		if (userData) {
			dispatch(setUser(userData));
		}
	}, [userData, dispatch]);

	return { isError, isLoading, refetch };
};

export { useGetUser };
