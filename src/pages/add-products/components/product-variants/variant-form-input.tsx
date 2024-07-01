import AddIcon from "@mui/icons-material/Add";
import { Box, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { BaseButton, NumberInput } from "~/components/index.ts";
import {
	type AddProductVariant,
	type OptionType,
} from "~/pages/add-products/types.ts";

import { SelectField } from "../select-field.tsx";
import { StyledFormGroup } from "../styles.ts";

const numberInputValues = {
	MAX: 10000,
	MIN: 1,
	STEP: 1,
};

type VariantFormInputProps = {
	colorsOptions: OptionType[];
	errors: FieldErrors<AddProductVariant>;
	onAddVariant: () => void;
	onColorChange: (event: SelectChangeEvent<number>) => void;
	onQuantityChange: (newQuantity: number) => void;
	onSizeChange: (event: SelectChangeEvent<number>) => void;
	quantity: number;
	selectedColor: number | undefined;
	selectedSize: number | undefined;
	sizesOptions: OptionType[];
};

const VariantFormInput: React.FC<VariantFormInputProps> = ({
	colorsOptions,
	errors,
	onAddVariant,
	onColorChange,
	onQuantityChange,
	onSizeChange,
	quantity,
	selectedColor,
	selectedSize,
	sizesOptions,
}) => {
	const { t } = useTranslation();
	const [changedQuantity, setChangedQuantity] = useState(quantity);

	useEffect(() => {
		setChangedQuantity(quantity);
	}, [quantity]);

	const handleChangeQuantity = useCallback(
		(value: number) => {
			onQuantityChange(value);
			setChangedQuantity(value);
		},
		[onQuantityChange],
	);

	return (
		<Box alignItems="center" display="flex" height="100%" width="100%">
			<StyledFormGroup>
				<Box display="flex" gap="26px" width="100%">
					<SelectField
						error={Boolean(errors.color)}
						helperText={errors.color?.message as string}
						items={colorsOptions}
						label={t("AddVendorProduct.selectColor")}
						onChange={onColorChange}
						value={selectedColor}
					/>
				</Box>
			</StyledFormGroup>

			<StyledFormGroup>
				<Box display="flex" gap="26px" width="100%">
					<SelectField
						error={Boolean(errors.size)}
						helperText={errors.size?.message as string}
						items={sizesOptions}
						label={t("AddVendorProduct.selectSize")}
						onChange={onSizeChange}
						value={selectedSize}
					/>
				</Box>
			</StyledFormGroup>
			<StyledFormGroup>
				<Box display="flex" gap="26px" width="100%">
					<NumberInput
						error={Boolean(errors.quantity)}
						helperText={errors.quantity?.message as string}
						label={t("AddVendorProduct.quantity")}
						max={numberInputValues.MAX}
						min={numberInputValues.MIN}
						onChange={handleChangeQuantity}
						step={numberInputValues.STEP}
						value={changedQuantity}
					/>
				</Box>
			</StyledFormGroup>
			<BaseButton
				onClick={onAddVariant}
				sx={{ marginTop: "23px", padding: "5px" }}
				variant="primary_black_bold"
			>
				<AddIcon />
			</BaseButton>
		</Box>
	);
};

export { VariantFormInput };
