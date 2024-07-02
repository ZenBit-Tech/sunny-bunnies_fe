/* eslint-disable typesafe/no-await-without-trycatch */
import { renderHook, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";

import { allFilters } from "~/test/mocks/index.ts";
import { Providers } from "~/test/providers.tsx";

import { useGetFiltersQuery } from "./filters-api.ts";

test("useGetFiltersQuery returns filters", async () => {
	const { result } = renderHook(() => useGetFiltersQuery(undefined), {
		wrapper: Providers,
	});

	await waitFor(() => expect(result.current.isSuccess).toBe(true));
	expect(result.current.data).toEqual(allFilters);
});
