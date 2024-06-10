import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroll-component";

import { Loader, Newsletter, TopInfoSection } from "~/components/index.ts";

import { CategoryCarousel, Products } from "./components/index.ts";
import { useProductFilters } from "./hooks/index.ts";

const minDataLength = 0;

const Home: React.FC = () => {
	const { t } = useTranslation();

	const {
		data,
		handleChooseCategory,
		handleFilterChange,
		handleLoadMore,
		hasMore,
		isError,
	} = useProductFilters();

	if (isError) {
		return <Box>{t("HomePage.errorLoadingProducts")}</Box>;
	}

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
