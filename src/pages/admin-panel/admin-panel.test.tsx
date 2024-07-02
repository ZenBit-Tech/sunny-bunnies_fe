import React from "react";

import { screen } from "@testing-library/react";
import { t } from "i18next";
import { describe, expect, it } from "vitest";

import { customRender } from "~/test/test-utils.tsx";

import { AdminPanel } from "./index.tsx";

describe("AdminPanel", () => {
	it("renders AdminPanel with basic elements", () => {
		customRender(<AdminPanel />);

		expect(screen.getByText(t("AdminPage.admin"))).toBeInTheDocument();
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
		expect(screen.getByTestId("user-management")).toBeInTheDocument();
	});
});
