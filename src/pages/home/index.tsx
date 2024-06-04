import { Box } from "@mui/material";
import React, { useCallback, useState } from "react";

import { useGetProductsQuery } from "~/redux/products/products-api.ts";

import {
	CategoryCarousel,
	Newsletter,
	Products,
	TopInfoSection,
} from "./components/index.ts";

const allCategories = "All";

const Home: React.FC = () => {
	const [filterCategory, setFilterCategory] = useState<string | undefined>(
		undefined,
	);
	const { data, isLoading } = useGetProductsQuery({ category: filterCategory });

	const handleChooseCategory = useCallback(
		(category: string) => {
			if (category === allCategories) {
				setFilterCategory(undefined);
			} else {
				setFilterCategory(category);
			}
		},
		[setFilterCategory],
	);

	return (
		<Box
			sx={{
				display: "flex",
				flex: 1,
				flexDirection: "column",
				padding: "15px 0",
			}}
		>
			<TopInfoSection />
			<CategoryCarousel onChooseCategory={handleChooseCategory} />
			{isLoading ? <div>Loading...</div> : <Products products={data} />}
			<Newsletter />
		</Box>
	);
};

export { Home };
