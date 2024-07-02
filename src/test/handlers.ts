import { HttpResponse, http } from "msw";

import { filtersApiPath } from "~/redux/filters/constants.ts";

import { allFilters } from "./mocks/all-filters.ts";

const apiUrl = import.meta.env.VITE_BASE_URL;

const handlers = [
	http.get(`${apiUrl}${filtersApiPath.ROOT}`, () => {
		return HttpResponse.json(allFilters);
	}),
];

export { handlers };
