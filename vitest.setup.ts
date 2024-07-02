import * as matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, expect } from "vitest";

import { mockServer } from "~/test/mock-server.ts";

expect.extend(matchers);

afterEach(() => {
	cleanup();
});

beforeAll(() => {
	mockServer.listen({
		onUnhandledRequest: (req) => {
			// eslint-disable-next-line no-console
			console.error(`Unhandled request: ${req.method} ${req.url}`);
		},
	});
});

afterAll(() => {
	mockServer.close();
});

afterEach(() => mockServer.resetHandlers());
