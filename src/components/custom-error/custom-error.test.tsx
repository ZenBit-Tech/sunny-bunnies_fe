import React from "react";

import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { CustomError } from "./index.tsx";

test("renders with provided error message", () => {
	const errorMessage = "This is a test error message";
	render(<CustomError errorMessage={errorMessage} />);

	const errorElement = screen.getByText(errorMessage);
	expect(errorElement).toBeInTheDocument();
});
