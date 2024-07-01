import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { t } from "i18next";

import Logo from "~/assets/images/logo/big.png";
import { BaseButton, CustomFormGroup } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { UserSignInRequestDto } from "~/libs/types/user.ts";
import { useAdminLoginMutation } from "~/redux/auth/auth-api.ts";
import { setTokens, setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/hooks.ts";
import theme from "~/theme.ts";

import { userSignInValidation } from "../validation/sign-in-schema.ts";

const AdminLogin: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [serverError, setServerError] = useState("");
	const [adminLogin, { isLoading }] = useAdminLoginMutation();

	const { control, errors, handleSubmit } = useAppForm<UserSignInRequestDto>({
		defaultValues: {
			email: "",
			password: "",
		},
		validationSchema: userSignInValidation,
	});

	const handleInputChange = useCallback(
		async (formData: UserSignInRequestDto): Promise<void> => {
			try {
				const signInData = await adminLogin(formData).unwrap();
				dispatch(setUser(signInData.user));
				dispatch(setTokens(signInData));
				navigate(AppRoute.USER_MANAGEMENT);
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);
			}
		},
		[adminLogin, dispatch, navigate],
	);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();
			void handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
	);

	return (
		<Box
			sx={{
				alignItems: "center",
				backgroundColor: theme.palette.lightGreen,
				display: "flex",
				flexDirection: "column",
				height: "100vh",
				justifyContent: "center",
				position: "relative",
			}}
		>
			<Box
				sx={{
					left: "20px",
					position: "absolute",
					top: "20px",
				}}
			>
				<Link to={AppRoute.HOME}>
					<img alt={t("AuthPage.logo")} src={Logo} />
				</Link>
			</Box>
			<Box
				component="form"
				onSubmit={handleFormSubmit}
				sx={{
					alignItems: "center",
					backgroundColor: theme.palette.white,
					borderRadius: "8px",
					display: "flex",
					flexDirection: "column",
					gap: "8px",
					justifyContent: "center",
					padding: "64px",
					width: "464px",
				}}
			>
				<Typography
					sx={{
						alignSelf: "flex-start",
					}}
					variant="playfairDisplayTitle"
				>
					{t("AdminLogin.signIn")}
				</Typography>
				<Typography
					sx={{
						alignSelf: "flex-start",
						color: theme.palette.fontGray,
						fontFamily: theme.typography.dmSans,
						fontSize: theme.fontSizes.small,
					}}
				>
					{t("AdminLogin.signInDescription")}
				</Typography>
				<CustomFormGroup
					control={control}
					error={errors.email}
					label={t("AdminLogin.email")}
					name="email"
					placeholder={t("AdminLogin.emailExample")}
					type="email"
				/>
				<CustomFormGroup
					control={control}
					error={errors.password}
					label={t("AdminLogin.password")}
					name="password"
					placeholder={t("AdminLogin.passwordPlaceholder")}
					type="password"
				/>
				{serverError && (
					<Typography color="error" variant="body2">
						{serverError}
					</Typography>
				)}
				<BaseButton
					fullWidth
					isLoading={isLoading}
					sx={{ mt: "12px" }}
					type="submit"
					variant="primary_black_bold"
				>
					{t("AdminLogin.signIn")}
				</BaseButton>
			</Box>
		</Box>
	);
};

export { AdminLogin };
