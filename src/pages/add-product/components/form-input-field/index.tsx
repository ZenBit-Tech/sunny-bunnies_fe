import React from "react";
import { Control, FieldValues, Path } from "react-hook-form";

import { CustomFormGroup } from "~/components/index.ts";

import { FieldDescription } from "../field-description/index.tsx";
import { ErrorSpan, FieldBox, SelectBox } from "./styles.ts";

type SelectionProps<TFieldValues extends FieldValues> = {
	control: Control<TFieldValues>;
	description: string;
	error: string | undefined;
	label: string;
	name: Path<TFieldValues>;
	placeholder: string;
	rows?: number;
	title: string;
};

const InputField = <TFieldValues extends FieldValues>({
	control,
	description,
	error,
	label,
	name,
	placeholder,
	rows,
	title,
}: SelectionProps<TFieldValues>): React.ReactElement => {
	return (
		<FieldBox>
			<FieldDescription description={description} title={title} />
			<SelectBox>
				<CustomFormGroup
					control={control}
					label={label}
					name={name}
					placeholder={placeholder}
					rows={rows}
					sx={{ margin: 0 }}
					type="text"
				/>
				{error && <ErrorSpan>{error}</ErrorSpan>}
			</SelectBox>
		</FieldBox>
	);
};

export { InputField };
