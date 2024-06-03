import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	FormControl,
	FormGroup,
	FormHelperText,
	FormLabel,
	IconButton,
	InputAdornment,
	TextField,
} from "@mui/material";
import React, { ReactElement, ReactNode } from "react";
import {
	Control,
	Controller,
	ControllerRenderProps,
	FieldError,
	FieldValues,
	Path,
} from "react-hook-form";

import { useToggle } from "~/libs/hooks/index.ts";
import theme from "~/theme.ts";

type CustomFormGroupProps<T extends FieldValues> = {
	children?: ReactNode;
	control: Control<T>;
	error?: FieldError;
	label: string;
	name: Path<T>;
	placeholder?: string;
	rules?: object;
	type: "date" | "email" | "number" | "password" | "text";
};

const CustomFormGroup = <T extends FieldValues>({
	children,
	control,
	error,
	label,
	name,
	placeholder,
	rules = {},
	type,
}: CustomFormGroupProps<T>): React.ReactNode => {
	const [showPassword, setShowPassword] = useToggle();

	const renderTextField = ({
		field,
	}: {
		field: ControllerRenderProps<T, Path<T>>;
	}): ReactElement => (
		<TextField
			{...field}
			InputProps={{
				endAdornment: type === "password" && (
					<InputAdornment position="end">
						<IconButton edge="end" onClick={setShowPassword}>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
			}}
			error={!!error}
			fullWidth
			placeholder={placeholder}
			sx={{
				"& input::placeholder": {
					color: "secondary.main",
					...theme.typography.playfairDisplay,
				},
				".MuiInputBase-root": {
					borderRadius: "6px",
					marginTop: "10px",
					paddingRight: "20px",
				},
			}}
			type={type === "password" && !showPassword ? "password" : "text"}
			variant="outlined"
		/>
	);

	return (
		<FormControl component="fieldset" error={!!error} fullWidth margin="normal">
			<FormLabel
				component="legend"
				sx={{
					color: theme.palette.primary.main,
					...theme.typography.playfairDisplay,
				}}
			>
				{label}
			</FormLabel>
			<FormGroup>
				{/* eslint-disable react/jsx-no-bind */}
				<Controller
					control={control}
					name={name}
					render={renderTextField}
					rules={rules}
				/>
				{children}
			</FormGroup>
			{error && <FormHelperText>{error.message}</FormHelperText>}
		</FormControl>
	);
};

export { CustomFormGroup };
