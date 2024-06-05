import React, { useCallback } from "react";

import { StyledFilterButton } from "./styles.ts";

type FilterButtonProperties = {
	filter: string;
	onClick: (filter: string) => void;
	selected: boolean;
};

const FilterButton: React.FC<FilterButtonProperties> = ({
	filter,
	onClick,
	selected,
}) => {
	const handleFilterClick = useCallback(() => {
		onClick(filter);
	}, [filter, onClick]);

	return (
		<StyledFilterButton onClick={handleFilterClick} selected={selected}>
			{filter}
		</StyledFilterButton>
	);
};

export { FilterButton };
