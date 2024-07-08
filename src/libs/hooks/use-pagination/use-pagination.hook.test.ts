import React from "react";

import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { pagination } from "~/libs/constants/pagination.ts";

import { usePagination } from "./use-pagination.hook.ts";

const NEW_PAGE = 3;
const NEW_LIMIT = 20;
const TOTAL_PAGES = 5;

describe("usePagination", () => {
	test("should initialize with default values", () => {
		const { result } = renderHook(() => usePagination());

		expect(result.current.page).toBe(pagination.DEFAULT_PAGE);
		expect(result.current.limit).toBe(pagination.LIMIT);
		expect(result.current.totalPages).toBe(pagination.DEFAULT_PAGE);
	});

	test("should initialize with given values", () => {
		const initialPage = 2;
		const initialLimit = 10;
		const { result } = renderHook(() =>
			usePagination(initialPage, initialLimit),
		);

		expect(result.current.page).toBe(initialPage);
		expect(result.current.limit).toBe(initialLimit);
		expect(result.current.totalPages).toBe(pagination.DEFAULT_PAGE);
	});

	test("should handle page change", () => {
		const { result } = renderHook(() => usePagination());

		act(() => {
			result.current.handlePageChange(
				{} as React.ChangeEvent<unknown>,
				NEW_PAGE,
			);
		});

		expect(result.current.page).toBe(NEW_PAGE);
	});

	test("should handle limit change", () => {
		const { result } = renderHook(() => usePagination());

		act(() => {
			result.current.handleLimitChange(NEW_LIMIT);
		});

		expect(result.current.limit).toBe(NEW_LIMIT);
		expect(result.current.page).toBe(pagination.DEFAULT_PAGE);
	});

	test("should update total pages", () => {
		const { result } = renderHook(() => usePagination());

		act(() => {
			result.current.updateTotalPages(TOTAL_PAGES);
		});

		expect(result.current.totalPages).toBe(TOTAL_PAGES);
	});
});
