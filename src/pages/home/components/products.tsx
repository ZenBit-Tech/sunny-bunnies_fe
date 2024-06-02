import { Box } from "@mui/material";
import React, { useCallback, useState } from "react";

import { FilterButton } from "./filter-button.tsx";

const filters = ["Recommended", "Just In", "Your Size"];

const Products: React.FC = () => {
	const [selectedFilter, setSelectedFilter] = useState("Recommended");

	const handleFilterClick = useCallback((filter: string): void => {
		setSelectedFilter(filter);
	}, []);

	return (
		<Box sx={{ padding: "52px", width: "100%" }}>
			<Box sx={{ display: "flex", gap: "15px", height: "40px" }}>
				{filters.map((filter) => (
					<FilterButton
						filter={filter}
						key={filter}
						onClick={handleFilterClick}
						selected={selectedFilter === filter}
					/>
				))}
			</Box>
		</Box>
	);
};

export { Products };
