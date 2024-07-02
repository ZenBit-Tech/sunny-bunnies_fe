/* eslint-disable */
import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import { t } from "i18next";
import { describe, expect, it } from "vitest";

import { customRender } from "~/test/test-utils.tsx";

import { RestorePasswordForm } from "./index.tsx";

describe("RestorePasswordForm", () => {
	it("should render the form and handle form submission", async () => {
		customRender(<RestorePasswordForm />);

		const emailInput = screen.getByTestId("email-input");
		const submitButton = screen.getByTestId("submit-button");

		expect(screen.getByText(t("Restore password"))).toBeInTheDocument();
		expect(
			screen.getByText(t("Enter your email for restore")),
		).toBeInTheDocument();
		expect(emailInput).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();

		await act(async () => {
			fireEvent.click(submitButton);

			await waitFor(() => {
				expect(submitButton).toBeInTheDocument();
			});
		});
	});
});
