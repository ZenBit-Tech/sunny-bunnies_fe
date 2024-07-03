import { HttpResponse, http } from "msw";

import { authApiPath } from "~/redux/auth/constants.ts";
import { filtersApiPath } from "~/redux/filters/constants.ts";

import { allFilters } from "./mocks/all-filters.ts";

const apiUrl = import.meta.env.VITE_BASE_URL;

const handlers = [
	http.get(`${apiUrl}${filtersApiPath.ROOT}`, () => {
		return HttpResponse.json(allFilters);
	}),
	http.post(`${apiUrl}${authApiPath.RESTORE_PASSWORD}`, () => {
		return HttpResponse.json({
			status: 200,
		});
	}),
	http.post(`${apiUrl}${authApiPath.RESET_PASSWORD}`, () => {
		return HttpResponse.json({
			status: 200,
		});
	}),
];

export { handlers };
