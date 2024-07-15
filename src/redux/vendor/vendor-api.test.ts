/*eslint-disable*/
import { renderHook, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";

import { Providers } from "~/test/providers.tsx";

import { useGetVendorProductsByOptionsQuery } from "./vendor-api";
import { products } from "~/test/mocks";

test("getProductsByOptions query", async () => {
	const { result } = renderHook(
		() =>
			useGetVendorProductsByOptionsQuery({
				activityStatuses: ["inactive", "active", "rejected"],
				limit: 10,
				order: "ASC",
				page: 1,
				searchQuery: "",
        filter: "name"
			}),
		{
			wrapper: Providers,
		},
	);

	await waitFor(() => expect(result.current.isSuccess).toBe(true));
	expect(result.current.data).toEqual(products);
});
