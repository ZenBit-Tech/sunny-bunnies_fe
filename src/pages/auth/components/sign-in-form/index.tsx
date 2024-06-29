import { Box, Divider, Typography } from "@mui/material";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { BaseButton, CustomFormGroup } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAddUserGoogleMutation } from "~/redux/auth/auth-api.ts";
import { setTokens, setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/hooks.ts";
import theme from "~/theme.ts";

import { AuthLinks, ForgotPasswordLink, SignUpLink } from "../index.ts";
import { StyledFormContainer } from "../styles.ts";
import { useSignInForm } from "./use-sign-in-form.ts";

const SignInForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { t } = useTranslation();

	const {
		control,
		errors,
		handleFormSubmit,
		isLoading,
		serverError,
		setServerError,
	} = useSignInForm();

	const [
		loginUser,
		{
			data: loginData,
			error: loginError,
			isError: isLoginError,
			isSuccess: isLoginSuccess,
		},
	] = useAddUserGoogleMutation();

	useEffect(() => {
		if (isLoginSuccess) {
			dispatch(setUser(loginData.user));
			dispatch(setTokens(loginData));
			navigate(AppRoute.ROLE);
		}
		if (isLoginError) {
			const loadError = (loginError as FetchBaseQueryError).data
				? ((loginError as FetchBaseQueryError).data as Error)
				: { message: t("Error.unknowError") };
			setServerError(loadError.message);
		}
	}, [
		loginData,
		loginError,
		isLoginError,
		isLoginSuccess,
		dispatch,
		navigate,
		setServerError,
		t,
		serverError,
	]);

	const onSuccess = useCallback(
		async (credentialResponse: CredentialResponse) => {
			try {
				await loginUser(credentialResponse);
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);
			}
		},
		[loginUser, setServerError, t],
	);

	return (
		<>
			<StyledFormContainer>
				<Typography variant="playfairDisplayTitle">
					{t("SignInComponent.signIn")}
				</Typography>
				<Typography color={theme.palette.secondary.main} variant="dmSans">
					{t("SignInComponent.signInWithGoogle")}
				</Typography>
				<GoogleLogin
					logo_alignment="center"
					onSuccess={onSuccess}
					type="icon"
				/>
				<Divider sx={{ width: "100%" }}>
					<Typography color="primary" variant="body1">
						{t("SignUpComponent.or")}
					</Typography>
				</Divider>
				<Box
					autoComplete="off"
					component="form"
					mb={2}
					mt={1}
					onSubmit={handleFormSubmit}
					width="100%"
				>
					<CustomFormGroup
						control={control}
						error={errors.email}
						label={t("SignUpComponent.email")}
						name="email"
						placeholder={t("SignUpComponent.emailExample")}
						type="email"
					/>
					<CustomFormGroup
						control={control}
						error={errors.password}
						label={t("SignUpComponent.password")}
						name="password"
						placeholder={t("SignUpComponent.passwordPlaceholder")}
						type="password"
					/>
					{serverError && (
						<Typography color="error" variant="body2">
							{serverError}
						</Typography>
					)}
					<ForgotPasswordLink />
					<BaseButton
						fullWidth
						isLoading={isLoading}
						sx={{ mt: 2 }}
						type="submit"
						variant="primary_black_bold"
					>
						{t("SignInComponent.signIn")}
					</BaseButton>
				</Box>
				<SignUpLink />
			</StyledFormContainer>
			<AuthLinks />
		</>
	);
};

export { SignInForm };
