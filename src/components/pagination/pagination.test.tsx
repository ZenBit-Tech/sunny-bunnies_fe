/*eslint-disable*/
import { screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import { customRender } from "~/test/test-utils.tsx";

import { CustomPagination } from "./index.tsx";

test("renders pagination with correct props", () => {
	const mockOnChange = vi.fn();
	const pageCount = 10;

	customRender(
		<CustomPagination count={pageCount} onChange={mockOnChange} page={1} />,
	);

	const maxPage = screen.getByText(pageCount.toString());
	expect(maxPage).toBeInTheDocument();

	const minPage = screen.getByText("1");
	expect(minPage).toBeInTheDocument();
});
