import React, { useCallback, useState } from "react";

import { pagination } from "~/libs/constants/pagination.ts";

type PaginationHookReturnType = {
	handleLimitChange: (newLimit: number) => void;
	handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
	limit: number;
	page: number;
	totalPages: number;
	updateTotalPages: (pages: number) => void;
};

const usePagination = (
	initialPage: number = pagination.DEFAULT_PAGE,
	initialLimit: number = pagination.LIMIT,
): PaginationHookReturnType => {
	const scrollTo = 0;
	const [page, setPage] = useState(initialPage);
	const [limit, setLimit] = useState(initialLimit);
	const [totalPages, setTotalPages] = useState(pagination.DEFAULT_PAGE);

	const scrollToTop = (): void => {
		document.body.scrollTop = scrollTo;
		document.documentElement.scrollTop = scrollTo;
	};

	const handlePageChange = useCallback(
		(_event: React.ChangeEvent<unknown>, value: number) => {
			setPage(value);
			scrollToTop();
		},
		[],
	);

	const handleLimitChange = useCallback((newLimit: number) => {
		setLimit(newLimit);
		setPage(pagination.DEFAULT_PAGE);
		scrollToTop();
	}, []);

	const updateTotalPages = useCallback((pages: number) => {
		setTotalPages(pages);
	}, []);

	return {
		handleLimitChange,
		handlePageChange,
		limit,
		page,
		totalPages,
		updateTotalPages,
	};
};

export { usePagination };
