import { Box, Chip } from "@mui/material";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

type FilterTagsProps = {
	filters: Record<string, number | string | undefined>;
	onClearAll: () => void;
	onClearFilter: (filterKey: string) => void;
};

const FilterTags: React.FC<FilterTagsProps> = ({
	filters,
	onClearAll,
	onClearFilter,
}) => {
	const { t } = useTranslation();

	const handleClearFilter = useCallback(
		(filterKey: string) => (): void => {
			onClearFilter(filterKey);
		},
		[onClearFilter],
	);

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				gap: "10px",
				margin: "30px 0",
			}}
		>
			{Object.keys(filters).map(
				(key) =>
					filters[key] !== undefined && (
						<Chip
							key={key}
							label={`${key.toUpperCase()}: ${filters[key]
								?.toString()
								.toUpperCase()}`}
							onDelete={handleClearFilter(key)}
						/>
					),
			)}
			<Chip
				label={t("ProductFilters.clearFilters")}
				onDelete={onClearAll}
				variant="outlined"
			/>
		</Box>
	);
};

export { FilterTags };
