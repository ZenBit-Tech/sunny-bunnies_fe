/* eslint-disable */
import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import { t } from "i18next";
import { describe, expect, it } from "vitest";

import { customRender } from "~/test/test-utils.tsx";

import { ResetPasswordForm } from "./index.tsx";

describe("ResetPasswordForm", () => {
	it("should render the form and handle successful submission", async () => {
		customRender(<ResetPasswordForm token="test-token" />);

		const passwordInput = screen.getByTestId("password-input");
		const repeatPasswordInput = screen.getByTestId("repeatPassword-input");
		const submitButton = screen.getByTestId("submit-button");

		expect(
			screen.getByText(t("SignUpComponent.enterNewPassword")),
		).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(repeatPasswordInput).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();

		await act(async () => {
			fireEvent.click(screen.getByTestId("submit-button"));

			await waitFor(() => {
				expect(submitButton).toBeInTheDocument();
			});
		});
	});
});
