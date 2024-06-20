import { Box, Button, Typography } from "@mui/material";
import { type SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
	CustomRadioButtonGroup,
	CustomRadioButtons,
	CustomSelect,
	CustomSlider,
} from "~/components/index.ts";
import { colors as fontColors, fontSizes } from "~/libs/constants/index.ts";
import { Filters } from "~/libs/types/filters.ts";
import { setFilters } from "~/redux/filters/filters.slice.ts";
import { useGetFiltersQuery } from "~/redux/filters/filters-api.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";

import { ColorPicker } from "../index.ts";
import { StyledFiltersContainer } from "./styles.ts";

const minProductPrice = 0;
const maxProductPrice = 10000;
const minInputValue = 0;
const maxInputValue = 1;

type ProductFiltersProps = {
	initialFilters: Filters;
	onApply: (filters: Filters) => void;
	onClear: () => void;
};

const ProductFilters: React.FC<ProductFiltersProps> = ({
	initialFilters,
	onApply,
	onClear,
}) => {
	const dispatch = useAppDispatch();
	const filterValues = useAppSelector((state) => state.filters);

	const { t } = useTranslation();

	const { brands, colors, materials, sizes, styles } = filterValues;
	const { data, error, isLoading } = useGetFiltersQuery({});

	const [minPrice, setMinPrice] = useState<number>(
		initialFilters.minPrice || minProductPrice,
	);
	const [maxPrice, setMaxPrice] = useState<number>(
		initialFilters.maxPrice || maxProductPrice,
	);
	const [selectedBrand, setSelectedBrand] = useState<string>(
		initialFilters.brand ? String(initialFilters.brand) : "",
	);
	const [selectedColor, setSelectedColor] = useState<string>(
		initialFilters.color ? String(initialFilters.color) : "",
	);
	const [selectedSize, setSelectedSize] = useState<string>(
		initialFilters.size ? String(initialFilters.size) : "",
	);
	const [selectedMaterial, setSelectedMaterial] = useState<string>(
		initialFilters.material ? String(initialFilters.material) : "",
	);
	const [selectedStyle, setSelectedStyle] = useState<string>(
		initialFilters.style ? String(initialFilters.style) : "",
	);
	const [selectedGender, setSelectedGender] = useState<string>(
		initialFilters.gender ? String(initialFilters.gender) : "",
	);

	useEffect(() => {
		if (data) {
			dispatch(setFilters(data));
		}
	}, [data, dispatch]);

	const handlePriceChange = useCallback(
		(_event: Event, newValue: number | number[]): void => {
			if (Array.isArray(newValue)) {
				setMinPrice(newValue[minInputValue]);
				setMaxPrice(newValue[maxInputValue]);
			}
		},
		[],
	);

	const handleMinPriceChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>): void => {
			setMinPrice(+e.target.value);
		},
		[],
	);

	const handleMaxPriceChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>): void => {
			setMaxPrice(+e.target.value);
		},
		[],
	);

	const handleGenderChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>): void => {
			setSelectedGender(e.target.value);
		},
		[],
	);

	const handleBrandChange = useCallback(
		(e: SelectChangeEvent<string>): void => {
			setSelectedBrand(e.target.value);
		},
		[],
	);

	const handleColorChange = useCallback((color: string): void => {
		setSelectedColor(color);
	}, []);

	const handleSizeChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>): void => {
			setSelectedSize(e.target.value);
		},
		[],
	);

	const handleStyleChange = useCallback(
		(e: SelectChangeEvent<string>): void => {
			setSelectedStyle(e.target.value);
		},
		[],
	);

	const handleMaterialChange = useCallback(
		(e: SelectChangeEvent<string>): void => {
			setSelectedMaterial(e.target.value);
		},
		[],
	);

	const handleApply = useCallback((): void => {
		const filters: Record<string, number | string> = {};

		if (minPrice !== undefined) filters.minPrice = minPrice;
		if (maxPrice !== maxProductPrice) filters.maxPrice = maxPrice;
		if (selectedBrand) filters.brand = selectedBrand;
		if (selectedColor) filters.color = selectedColor;
		if (selectedSize) filters.size = selectedSize;
		if (selectedMaterial) filters.material = selectedMaterial;
		if (selectedStyle) filters.style = selectedStyle;
		if (selectedGender) filters.gender = selectedGender;

		onApply(filters);
	}, [
		minPrice,
		maxPrice,
		selectedBrand,
		selectedColor,
		selectedSize,
		selectedMaterial,
		selectedStyle,
		selectedGender,
		onApply,
	]);

	const handleClear = useCallback((): void => {
		setMinPrice(minProductPrice);
		setMaxPrice(maxProductPrice);
		setSelectedBrand("");
		setSelectedColor("");
		setSelectedSize("");
		setSelectedMaterial("");
		setSelectedStyle("");
		setSelectedGender("");
		onClear();
	}, [onClear]);

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

			<CustomRadioButtons
				label={t("ProductFilters.gender")}
				onChange={handleGenderChange}
				options={[
					{ label: t("ProductFilters.male"), value: "male" },
					{ label: t("ProductFilters.female"), value: "female" },
				]}
				value={selectedGender}
			/>

			<CustomSelect
				items={brands}
				label={t("ProductFilters.brand")}
				onChange={handleBrandChange}
				value={selectedBrand}
			/>

			<ColorPicker
				colors={colors}
				onChange={handleColorChange}
				selectedColor={selectedColor}
				title={t("ProductFilters.color")}
			/>

			<CustomRadioButtonGroup
				label={t("ProductFilters.size")}
				onChange={handleSizeChange}
				options={
					sizes?.map((size) => ({
						label: size.name,
						value: size.name,
					})) || []
				}
				value={selectedSize}
			/>

			<CustomSelect
				items={styles}
				label={t("ProductFilters.style")}
				onChange={handleStyleChange}
				value={selectedStyle}
			/>

			<CustomSelect
				items={materials}
				label={t("ProductFilters.material")}
				onChange={handleMaterialChange}
				value={selectedMaterial}
			/>

			<CustomSlider
				inputStartAdornment="$"
				label={t("ProductFilters.price")}
				max={maxProductPrice}
				min={minProductPrice}
				onChange={handlePriceChange}
				onMaxChange={handleMaxPriceChange}
				onMinChange={handleMinPriceChange}
				value={[minPrice, maxPrice]}
			/>
			<Box
				sx={{
					display: "flex",
					gap: "20px",
					marginTop: "20px",
				}}
			>
				<Button onClick={handleApply} variant="contained">
					{t("ProductFilters.applyFilters")}
				</Button>
				<Button onClick={handleClear} variant="outlined">
					{t("ProductFilters.clearFilters")}
				</Button>
			</Box>
		</StyledFiltersContainer>
	);
};

export { ProductFilters };
