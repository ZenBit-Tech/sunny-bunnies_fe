import {
	Box,
	FormControl,
	FormControlLabel,
	FormHelperText,
	RadioGroup,
	Typography,
} from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { t } from "i18next";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { Role } from "~/libs/types/user-profile.type.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { useUpdateMutation } from "~/redux/user/user-api.ts";
import theme from "~/theme.ts";

import { CustomRadioButton } from "../../../components/radio-button/index.tsx";
import { roleValidation } from "../validation/role-schema.ts";
import { FormButtons } from "./buttons.tsx";
import { StyledFormContainer } from "./styles.ts";

const RoleForm: React.FC = () => {
	const [serverError, setServerError] = useState("");
	const user = useAppSelector((state) => state.auth.user);
	const [update] = useUpdateMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { errors, handleSubmit, setValue, watch } = useAppForm<Role>({
		defaultValues: {
			role: user?.profile.role ?? "buyer",
		},
		validationSchema: roleValidation,
	});

	const handleInputChange = useCallback(
		async (formData: Role): Promise<void> => {
			try {
				const updatedUser = await update(formData).unwrap();
				dispatch(setUser(updatedUser));
				navigate(AppRoute.GENERAL_INFORMATION);
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);
			}
		},
		[dispatch, navigate, update],
	);
	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();
			void handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
	);

	const handleRoleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setValue("role", e.target.value);
		},
		[setValue],
	);

	const selectedRole = watch("role");

	return (
		<StyledFormContainer>
			<Box width="30%">
				<Typography
					color="primary"
					marginBottom="8px"
					sx={{ fontSize: theme.typography.playfairDisplayBold }}
				>
					{t("Form.role")}
				</Typography>
				<Typography
					sx={{
						color: theme.palette.fontGray,
						fontSize: theme.typography.dmSans,
					}}
					variant="body1"
				>
					{t("Form.roleText")}
				</Typography>
			</Box>
			<Box
				autoComplete="off"
				component="form"
				display="flex"
				flexDirection="column"
				onSubmit={handleFormSubmit}
				width="70%"
			>
				<FormControl component="fieldset" error={Boolean(errors.role)}>
					<RadioGroup
						aria-label="role"
						name="role"
						onChange={handleRoleChange}
						row
						sx={{
							display: "flex",
							gap: "50px",
						}}
						value={selectedRole}
					>
						<FormControlLabel
							control={<CustomRadioButton />}
							label={t("Form.buyer")}
							value="buyer"
						/>
						<FormControlLabel
							control={<CustomRadioButton />}
							label={t("Form.vendor")}
							value="vendor"
						/>
					</RadioGroup>
					{errors.role && (
						<FormHelperText>{errors.role.message as string}</FormHelperText>
					)}
					{serverError && (
						<Typography color="error" variant="body2">
							{serverError}
						</Typography>
					)}
				</FormControl>

				<Box
					display="flex"
					gap="10px"
					justifyContent="flex-end"
					marginTop="10%"
				>
					<FormButtons isStart />
				</Box>
			</Box>
		</StyledFormContainer>
	);
};

export { RoleForm };
