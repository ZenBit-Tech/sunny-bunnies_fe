/* eslint-disable */
import { renderHook, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";

import { Providers } from "~/test/providers.tsx";
import { useAddProductMutation, useGetWishlistQuery } from "./wishlist-api";

test("addProduct sends the correct request and receives a success response", async () => {
	const { result } = renderHook(() => useAddProductMutation(), {
		wrapper: Providers,
	});

	const [addProduct] = result.current;

	await addProduct({ productId: "123" });

	await waitFor(() => {
		const { isError, isLoading, isSuccess } = result.current[1];
		expect(isLoading).toBe(false);
		expect(isError).toBe(false);
		expect(isSuccess).toBe(true);
	});
});

test("getWishlist sends the correct request and receives a success response", async () => {
	const { result } = renderHook(
		() => useGetWishlistQuery({ limit: 10, page: 1 }),
		{
			wrapper: Providers,
		},
	);

	await waitFor(() => {
		const { data, isError, isLoading, isSuccess } = result.current;
		expect(isLoading).toBe(false);
		expect(isError).toBe(false);
		expect(isSuccess).toBe(true);
		expect(data).toHaveProperty("products");
		expect(data).toHaveProperty("totalCount");
		expect(data).toHaveProperty("totalPages");
	});
});
