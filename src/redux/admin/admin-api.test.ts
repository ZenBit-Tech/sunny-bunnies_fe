/*eslint-disable*/
import { act, renderHook, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";

import { Providers } from "~/test/providers.tsx";

import {
	useDeleteUserMutation,
	useGetUserByIdQuery,
	useGetUsersByOptionsQuery,
	useGetProductsByOptionsQuery,
	useUpdateUserStatusMutation,
} from "./admin-api";
import { products, user, users } from "~/test/mocks";

test("deleteUser mutation", async () => {
	const { result } = renderHook(() => useDeleteUserMutation(), {
		wrapper: Providers,
	});

	const [deleteUser] = result.current;

	await act(async () => {
		await deleteUser("1");
	});

	await waitFor(() => {
		const { isError, isLoading, isSuccess } = result.current[1];
		expect(isLoading).toBe(false);
		expect(isError).toBe(false);
		expect(isSuccess).toBe(true);
	});
});

test("updateUserStatus mutation", async () => {
	const { result } = renderHook(() => useUpdateUserStatusMutation(), {
		wrapper: Providers,
	});

	const [updateUserStatus] = result.current;

	await act(async () => {
		await updateUserStatus({ id: "1", status: "active" });
	});

	await waitFor(() => {
		const { isError, isLoading, isSuccess } = result.current[1];
		expect(isLoading).toBe(false);
		expect(isError).toBe(false);
		expect(isSuccess).toBe(true);
	});
});

test("getUserById query", async () => {
	const { result } = renderHook(() => useGetUserByIdQuery("1"), {
		wrapper: Providers,
	});

	await waitFor(() => expect(result.current.isSuccess).toBe(true));
	expect(result.current.data).toEqual(user);
});

test("getUsersByOptions query", async () => {
	const { result } = renderHook(
		() =>
			useGetUsersByOptionsQuery({
				limit: 10,
				order: "ASC",
				page: 1,
				role: "vendor",
				searchQuery: "",
				sortField: "name",
			}),
		{
			wrapper: Providers,
		},
	);

	await waitFor(() => expect(result.current.isSuccess).toBe(true));
	expect(result.current.data).toEqual(users);
});

test("getProductsByOptions query", async () => {
	const { result } = renderHook(
		() =>
			useGetProductsByOptionsQuery({
				activityStatuses: ["active"],
				limit: 10,
				order: "ASC",
				page: 1,
				searchQuery: "",
			}),
		{
			wrapper: Providers,
		},
	);

	await waitFor(() => expect(result.current.isSuccess).toBe(true));
	expect(result.current.data).toEqual(products);
});
