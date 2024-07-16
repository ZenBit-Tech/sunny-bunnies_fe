import React, { ReactElement, useCallback } from "react";
import {
	Control,
	Controller,
	ControllerRenderProps,
	FieldValues,
	Path,
} from "react-hook-form";

import {
	FormControl,
	MenuItem,
	Select as MuiSelect,
	SelectChangeEvent,
} from "@mui/material";

import { FieldDescription } from "../field-description/index.tsx";
import { ErrorSpan, FieldBox, SelectBox, StyledFormLabel } from "./styles.ts";

type SelectionProps<TSelect, TFieldValues extends FieldValues> = {
	control: Control<TFieldValues>;
	description?: string;
	disabled: boolean;
	error: string | undefined;
	getValueId: (value: TSelect) => string;
	getValueName: (value: TSelect) => string;
	handleChangeValue: (event: SelectChangeEvent<string>) => void;
	name: Path<TFieldValues>;
	selectedValue: TSelect | null;
	title?: string;
	values: TSelect[];
};

const SelectionField = <TSelect, TFieldValues extends FieldValues>({
	control,
	description,
	disabled,
	error,
	getValueId,
	getValueName,
	handleChangeValue,
	name,
	selectedValue,
	title,
	values,
}: SelectionProps<TSelect, TFieldValues>): React.ReactElement => {
	const renderMenuItem = useCallback(
		(value: TSelect) => (
			<MenuItem key={getValueId(value)} value={getValueName(value)}>
				{getValueName(value)}
			</MenuItem>
		),
		[getValueId, getValueName],
	);

	const renderSelect = useCallback(
		({
			field,
		}: {
			field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>;
		}): ReactElement => (
			<MuiSelect
				{...field}
				disabled={disabled}
				fullWidth
				onChange={handleChangeValue}
				value={selectedValue ? getValueName(selectedValue) : ""}
			>
				<MenuItem value="">{title}</MenuItem>
				{!disabled && values.map(renderMenuItem)}
			</MuiSelect>
		),
		[
			disabled,
			handleChangeValue,
			renderMenuItem,
			selectedValue,
			getValueName,
			title,
			values,
		],
	);

	return (
		<FieldBox>
			{title && description && (
				<FieldDescription description={description} title={title} />
			)}
			<SelectBox>
				<FormControl component="fieldset" fullWidth>
					<StyledFormLabel>{title}</StyledFormLabel>
					<Controller control={control} name={name} render={renderSelect} />
				</FormControl>
				{error && <ErrorSpan>{error}</ErrorSpan>}
			</SelectBox>
		</FieldBox>
	);
};

export { SelectionField };
