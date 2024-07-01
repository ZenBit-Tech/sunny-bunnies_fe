import React from "react";

import { StyledPagination } from "./styles.ts";

type PaginationProps = {
	count: number;
	onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
	page: number;
};

const CustomPagination: React.FC<PaginationProps> = ({
	count,
	onChange,
	page,
}) => {
	return <StyledPagination count={count} onChange={onChange} page={page} />;
};

export { CustomPagination };
