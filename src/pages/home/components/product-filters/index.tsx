import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetFiltersQuery } from "~/redux/filters/filters-api";
import { setFilters } from "~/redux/filters/filters.slice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { ColorPicker } from "../index";
import { type SelectChangeEvent } from "@mui/material";
import { CustomSelect, CustomSlider } from "~/components";
import { StyledFiltersContainer } from "./styles";
import { colors as fontColors, fontSizes } from "~/libs/constants/index.ts";

const ProductFilters: React.FC<{
	onApply: (filters: any) => void;
}> = ({ onApply }) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const filterValues = useAppSelector((state) => state.filters);
	const { brands, colors, sizes } = filterValues;

	const { data, error, isLoading } = useGetFiltersQuery({});
	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(10000);
	const [selectedBrand, setSelectedBrand] = useState<string>("");
	const [selectedColor, setSelectedColor] = useState<string>("");
	const [selectedSize, setSelectedSize] = useState<string>("");

	useEffect(() => {
		if (data) {
			dispatch(setFilters(data));
		}
	}, [data, dispatch]);

	const handlePriceChange = (_: Event, newValue: number | number[]): void => {
		if (Array.isArray(newValue)) {
			setMinPrice(newValue[0]);
			setMaxPrice(newValue[1]);
		}
	};

	const handleMinPriceChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setMinPrice(+event.target.value);
	};

	const handleMaxPriceChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setMaxPrice(+event.target.value);
	};

	const handleApply = (): void => {
		const filters: Record<string, string | number> = {};

		if (minPrice !== undefined) filters.minPrice = minPrice;
		if (maxPrice !== undefined) filters.maxPrice = maxPrice;
		if (selectedBrand) filters.brand = selectedBrand;
		if (selectedColor) filters.color = selectedColor;
		if (selectedSize) filters.size = selectedSize;

		onApply(filters);
	};

	if (isLoading) return <Box>Loading filters...</Box>;
	if (error) return <Box>Error loading filters</Box>;

	return (
		<StyledFiltersContainer>
			<Typography
				color={fontColors.textBlack}
				fontSize={fontSizes.lg}
				textAlign="center"
				variant="playfairDisplay"
			>
				{t("ProductFilters.filters")}
			</Typography>
			<CustomSelect
				label={t("ProductFilters.brand")}
				value={selectedBrand}
				onChange={(e: SelectChangeEvent<string>) =>
					setSelectedBrand(e.target.value)
				}
				items={brands}
			/>

			<ColorPicker
				colors={colors}
				selectedColor={selectedColor}
				onChange={setSelectedColor}
				title={t("ProductFilters.color")}
			/>

			<CustomSelect
				label={t("ProductFilters.size")}
				value={selectedSize}
				onChange={(e: SelectChangeEvent<string>) =>
					setSelectedSize(e.target.value)
				}
				items={sizes}
			/>

			<CustomSlider
				min={0}
				max={10000}
				value={[minPrice, maxPrice]}
				onChange={handlePriceChange}
				onMinChange={handleMinPriceChange}
				onMaxChange={handleMaxPriceChange}
				label={t("ProductFilters.price")}
				inputStartAdornment="$"
			/>
			<Box
				sx={{
					display: "flex",
					gap: "20px",
					marginTop: "20px",
				}}
			>
				<Button variant="contained" onClick={handleApply}>
					{t("ProductFilters.applyFilters")}
				</Button>
				<Button variant="outlined">{t("ProductFilters.clearFilters")}</Button>
			</Box>
		</StyledFiltersContainer>
	);
};

export { ProductFilters };
