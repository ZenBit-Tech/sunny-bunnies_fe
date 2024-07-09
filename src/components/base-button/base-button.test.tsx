/* eslint-disable */
import { act, fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BaseButton } from "./index.tsx";
import { customRender } from "~/test/test-utils.tsx";

describe("BaseButton", () => {
	it("should render a button with text", () => {
		act(() => {
			customRender(
				<BaseButton data-testid="test-button" onClick={() => {}}>
					Test Button
				</BaseButton>,
			);
		});

		const button = screen.getByTestId("test-button");
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Test Button");
	});

	it("should render a button with an icon", () => {
		act(() => {
			customRender(
				<BaseButton
					data-testid="test-button"
					onClick={() => {}}
					startIcon={<span>Icon</span>}
				>
					Test Button
				</BaseButton>,
			);
		});

		const button = screen.getByTestId("test-button");
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Test Button");
		expect(screen.getByText("Icon")).toBeInTheDocument();
	});

	it("should handle button click", () => {
		const handleClick = vi.fn();

		act(() => {
			customRender(
				<BaseButton data-testid="test-button" onClick={handleClick}>
					Test Button
				</BaseButton>,
			);
		});

		const button = screen.getByTestId("test-button");
		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalled();
	});
});
