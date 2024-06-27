import { useLocation } from "react-router-dom";

const useIsRouteActive = (route: string): boolean => {
	const { pathname } = useLocation();

	return pathname.includes(route);
};

export { useIsRouteActive };
