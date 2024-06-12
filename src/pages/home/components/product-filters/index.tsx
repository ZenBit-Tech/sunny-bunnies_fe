import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGetFiltersQuery } from "~/redux/filters/filters-api";
import { setFilters } from "~/redux/filters/filters.slice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";

type ProductFiltersProperties = {};

const ProductFilters: React.FC<ProductFiltersProperties> = ({}) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const filterValues = useAppSelector((state) => state.filters);
	const { brands } = filterValues;

	const { data, error, isLoading } = useGetFiltersQuery({});

	useEffect(() => {
		if (data) {
			dispatch(setFilters(data));
		}
	}, [data, dispatch]);

	if (isLoading) return <Box>Loading filters...</Box>;
	if (error) return <Box>Error loading filters</Box>;

	return (
		<Box>
			{t("ProductFilters.brand")}
			{brands?.map((brand) => <p key={brand.id}>{brand.name}</p>)}
		</Box>
	);
};

export { ProductFilters };
