import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	FormControl,
	FormGroup,
	FormHelperText,
	FormLabel,
	IconButton,
	InputAdornment,
	SxProps,
	TextField,
} from "@mui/material";
import React, { ReactElement, ReactNode, useCallback } from "react";
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
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
	name: Path<T>;
	placeholder?: string;
	rules?: object;
	sx?: SxProps;
	type: "date" | "email" | "number" | "password" | "text";
};

const CustomFormGroup = <T extends FieldValues>({
	children,
	control,
	error,
	handleChange,
	label,
	name,
	placeholder,
	rules = {},
	sx,
	type,
}: CustomFormGroupProps<T>): React.ReactNode => {
	const [showPassword, setShowPassword] = useToggle();

	const renderTextField = useCallback(
		({ field }: { field: ControllerRenderProps<T, Path<T>> }): ReactElement => (
			<TextField
				{...field}
				InputProps={{
					endAdornment: type === "password" && (
						<InputAdornment position="end">
							<IconButton
								edge="end"
								onClick={setShowPassword}
								sx={{
									"&:hover": {
										backgroundColor: "transparent",
									},
								}}
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
				error={!!error}
				fullWidth
				onChange={handleChange ? handleChange : field.onChange}
				placeholder={placeholder}
				sx={{
					"& input::placeholder": {
						color: "secondary.main",
						...theme.typography.playfairDisplay,
					},
					".MuiInputBase-root": {
						borderRadius: "6px",
						marginTop: "5px",
						paddingRight: "20px",
					},
				}}
				type={type === "password" && !showPassword ? "password" : "text"}
				variant="outlined"
			/>
		),
		[handleChange, error, placeholder, setShowPassword, showPassword, type],
	);

	return (
		<FormControl
			component="fieldset"
			error={!!error}
			fullWidth
			margin="dense"
			sx={sx}
		>
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
				<Controller
					control={control}
					name={name}
					render={renderTextField}
					rules={rules}
				/>
				{children}
			</FormGroup>
			{error && (
				<FormHelperText sx={{ marginLeft: 0 }}>{error.message}</FormHelperText>
			)}
		</FormControl>
	);
};

export { CustomFormGroup };
