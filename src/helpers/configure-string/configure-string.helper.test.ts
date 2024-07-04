import { describe, expect, test } from "vitest";

import { configureString } from "./configure-string.helper.ts";

describe("configureString", () => {
	test("should return string with parameters replaced", () => {
		const result = configureString("/users/:id/profile", { id: "123" });
		expect(result).toBe("/users/123/profile");
	});

	test("should handle multiple replacements", () => {
		const result = configureString("/users/:id/orders/:orderId", {
			id: "123",
			orderId: "456",
		});
		expect(result).toBe("/users/123/orders/456");
	});

	test("should handle no replacements", () => {
		const result = configureString("/static/path", {});
		expect(result).toBe("/static/path");
	});

	test("should handle extra parameters", () => {
		const result = configureString("/users/:id", "extra", { id: "123" });
		expect(result).toBe("/users/123extra");
	});

	test("should handle complex strings", () => {
		const result = configureString(
			"/users/:id/profile/:section/details",
			"extra",
			{ id: "123", section: "overview" },
		);
		expect(result).toBe("/users/123/profile/overview/detailsextra");
	});
});
