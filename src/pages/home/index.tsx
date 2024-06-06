import { Box } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroll-component";

import { Loader, Newsletter, TopInfoSection } from "~/components/index.ts";
import {
	productsLoadLimit,
	productsLoadOffset,
} from "~/redux/products/constants.ts";
import { useGetProductsQuery } from "~/redux/products/products-api.ts";

import { CategoryCarousel, Products } from "./components/index.ts";

const allCategories = "All";
const minDataLength = 0;

const Home: React.FC = () => {
	const { t } = useTranslation();
	const [filterCategory, setFilterCategory] = useState<string | undefined>(
		undefined,
	);
	const [additionalFilters, setAdditionalFilters] = useState<
		Record<string, number | undefined>
	>({});
	const [offset, setOffset] = useState(productsLoadOffset);

	const { data, isError, isFetching, isLoading } = useGetProductsQuery({
		category: filterCategory,
		limit: productsLoadLimit,
		offset,
		...additionalFilters,
	});

	const handleChooseCategory = useCallback((category: string) => {
		setFilterCategory(category === allCategories ? undefined : category);
		setOffset(productsLoadOffset);
		setAdditionalFilters({});
	}, []);

	const handleFilterChange = useCallback(
		(newFilters: Record<string, number | undefined>) => {
			setOffset(productsLoadOffset);
			setAdditionalFilters(newFilters);
		},
		[],
	);

	const handleLoadMore = useCallback(() => {
		if (!isFetching) {
			setOffset((prevOffset) => prevOffset + productsLoadLimit);
		}
	}, [isFetching]);

	if (isError) {
		return <Box>{t("HomePage.errorLoadingProducts")}</Box>;
	}

	const hasMore = !isLoading && data?.length === productsLoadLimit;

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
			<InfiniteScroll
				dataLength={data?.length || minDataLength}
				hasMore={hasMore}
				loader={<Loader />}
				next={handleLoadMore}
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "15px",
					overflow: "inherit",
				}}
			>
				{data && (
					<Products handleFilterChange={handleFilterChange} products={data} />
				)}
			</InfiniteScroll>
			<Newsletter />
		</Box>
	);
};

export { Home };
