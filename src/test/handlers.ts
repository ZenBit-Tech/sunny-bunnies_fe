import { HttpResponse, http } from "msw";

import { adminApiPath } from "~/redux/admin/constants.ts";
import { authApiPath } from "~/redux/auth/constants.ts";
import { filtersApiPath } from "~/redux/filters/constants.ts";

import { allFilters, user, users } from "./mocks/index.ts";

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
	http.delete(`${apiUrl}${adminApiPath.DELETE_USER}/:id`, () => {
		return HttpResponse.json({
			status: 200,
		});
	}),
	http.patch(`${apiUrl}${adminApiPath.UPDATE_USER_STATUS}/:id`, () => {
		return HttpResponse.json({
			status: 200,
		});
	}),
	http.get(`${apiUrl}${adminApiPath.GET_USER}/:id`, () => {
		return HttpResponse.json(user);
	}),
	http.get(`${apiUrl}${adminApiPath.GET_BY_OPTIONS}`, () => {
		return HttpResponse.json(users);
	}),
];

export { handlers };
