import React from "react";
import { Box, Chip } from "@mui/material";
import { useTranslation } from "react-i18next";

type FilterTagsProps = {
	filters: Record<string, string | number | undefined>;
	onClearFilter: (filterKey: string) => void;
	onClearAll: () => void;
};

const FilterTags: React.FC<FilterTagsProps> = ({
	filters,
	onClearFilter,
	onClearAll,
}) => {
	const { t } = useTranslation();
	return (
		<Box
			sx={{
				display: "flex",
				gap: "10px",
				flexWrap: "wrap",
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
							onDelete={() => onClearFilter(key)}
						/>
					),
			)}
			<Chip
				label={t("ProductFilters.clearFilters")}
				variant="outlined"
				onDelete={onClearAll}
			/>
		</Box>
	);
};

export { FilterTags };
