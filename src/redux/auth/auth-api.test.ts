/*eslint-disable */
import { renderHook, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";

import { Providers } from "~/test/providers.tsx";

import {
	useResetPasswordMutation,
	useRestorePasswordMutation,
} from "./auth-api.ts";

test("restorePassword sends the correct request and receives a success response", async () => {
	const { result } = renderHook(() => useRestorePasswordMutation(), {
		wrapper: Providers,
	});

	const [restorePassword] = result.current;

	await restorePassword({ email: "test@example.com" });

	await waitFor(() => {
		const { isError, isLoading, isSuccess } = result.current[1];
		expect(isLoading).toBe(false);
		expect(isError).toBe(false);
		expect(isSuccess).toBe(true);
	});
});

test("resetPassword sends the correct request and receives a success response", async () => {
	const { result } = renderHook(() => useResetPasswordMutation(), {
		wrapper: Providers,
	});

	const [resetPassword] = result.current;

	await resetPassword({ password: "newPassword", token: "resetToken" });

	await waitFor(() => {
		const { isError, isLoading, isSuccess } = result.current[1];
		expect(isLoading).toBe(false);
		expect(isError).toBe(false);
		expect(isSuccess).toBe(true);
	});
});
