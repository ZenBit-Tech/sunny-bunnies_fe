import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetFiltersQuery } from "~/redux/filters/filters-api";
import { setFilters } from "~/redux/filters/filters.slice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { Filters } from "~/libs/types/filters.ts";
import { ColorPicker } from "../index";
import { type SelectChangeEvent } from "@mui/material";
import {
	CustomSelect,
	CustomSlider,
	CustomRadioButtons,
	CustomRadioButtonGroup,
} from "~/components";
import { StyledFiltersContainer } from "./styles";
import { colors as fontColors, fontSizes } from "~/libs/constants/index.ts";

const maxProductPrice = 10000;

type ProductFiltersProps = {
	onApply: (filters: Filters) => void;
	onClear: () => void;
	initialFilters: Filters;
};

const ProductFilters: React.FC<ProductFiltersProps> = ({
	onApply,
	onClear,
	initialFilters,
}) => {
	const dispatch = useAppDispatch();
	const filterValues = useAppSelector((state) => state.filters);

	const { t } = useTranslation();

	const { brands, colors, sizes, materials, styles } = filterValues;
	const { data, error, isLoading } = useGetFiltersQuery({});

	const [minPrice, setMinPrice] = useState<number>(
		initialFilters.minPrice || 0,
	);
	const [maxPrice, setMaxPrice] = useState<number>(
		initialFilters.maxPrice || 10000,
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
		if (maxPrice !== maxProductPrice) filters.maxPrice = maxPrice;
		if (selectedBrand) filters.brand = selectedBrand;
		if (selectedColor) filters.color = selectedColor;
		if (selectedSize) filters.size = selectedSize;
		if (selectedMaterial) filters.material = selectedMaterial;
		if (selectedStyle) filters.style = selectedStyle;
		if (selectedGender) filters.gender = selectedGender;

		onApply(filters);
	};

	const handleClear = (): void => {
		setMinPrice(0);
		setMaxPrice(10000);
		setSelectedBrand("");
		setSelectedColor("");
		setSelectedSize("");
		setSelectedMaterial("");
		setSelectedStyle("");
		setSelectedGender("");
		onClear();
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

			<CustomRadioButtons
				label={t("ProductFilters.gender")}
				options={[
					{ value: "male", label: t("ProductFilters.male") },
					{ value: "female", label: t("ProductFilters.female") },
				]}
				value={selectedGender}
				onChange={(e) => setSelectedGender(e.target.value)}
			/>

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

			<CustomRadioButtonGroup
				label={t("ProductFilters.size")}
				options={
					sizes?.map((size) => ({
						value: size.name,
						label: size.name,
					})) || []
				}
				value={selectedSize}
				onChange={(e) => setSelectedSize(e.target.value)}
			/>

			<CustomSelect
				label={t("ProductFilters.style")}
				value={selectedStyle}
				onChange={(e: SelectChangeEvent<string>) =>
					setSelectedStyle(e.target.value)
				}
				items={styles}
			/>

			<CustomSelect
				label={t("ProductFilters.material")}
				value={selectedMaterial}
				onChange={(e: SelectChangeEvent<string>) =>
					setSelectedMaterial(e.target.value)
				}
				items={materials}
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
				<Button variant="outlined" onClick={handleClear}>
					{t("ProductFilters.clearFilters")}
				</Button>
			</Box>
		</StyledFiltersContainer>
	);
};

export { ProductFilters };
