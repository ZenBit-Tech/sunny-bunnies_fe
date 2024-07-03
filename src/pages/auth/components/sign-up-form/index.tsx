import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Box, Divider, Typography } from "@mui/material";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { BaseButton, CustomFormGroup } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAddUserGoogleMutation } from "~/redux/auth/auth-api.ts";
import { setTokens, setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/hooks.ts";
import theme from "~/theme.ts";

import { AuthLinks } from "../auth-links/index.tsx";
import { SignInLink } from "../sign-in-link/index.tsx";
import { StyledFormContainer } from "../styles.ts";
import { useSignUpForm } from "./use-sign-up-form.ts";

const SignUpForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { control, errors, handleFormSubmit, isLoading, serverError } =
		useSignUpForm();
	const { setServerError } = useSignUpForm();

	const [
		addUser,
		{
			data: signUpData,
			error: signUpError,
			isError: isSignUpError,
			isSuccess: isSignUpSuccess,
		},
	] = useAddUserGoogleMutation();

	useEffect(() => {
		if (isSignUpSuccess) {
			dispatch(setUser(signUpData.user));
			dispatch(setTokens(signUpData));
			navigate(AppRoute.VERIFY_EMAIL);
		}
		if (isSignUpError) {
			const loadError = (signUpError as FetchBaseQueryError).data
				? ((signUpError as FetchBaseQueryError).data as Error)
				: { message: t("Error.unknowError") };
			setServerError(loadError.message);
		}
	}, [
		signUpData,
		signUpError,
		isSignUpError,
		isSignUpSuccess,
		dispatch,
		navigate,
		setServerError,
		t,
	]);

	const onSuccess = useCallback(
		async (credentialResponse: CredentialResponse) => {
			try {
				await addUser(credentialResponse);
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);
			}
		},
		[addUser, setServerError, t],
	);

	return (
		<>
			<StyledFormContainer>
				<Typography variant="playfairDisplayTitle">
					{t("SignUpComponent.createYourAccount")}
				</Typography>
				<Typography color={theme.palette.secondary.main} variant="dmSans">
					{t("SignUpComponent.signUpWithGoogle")}
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
					mb={1}
					onSubmit={handleFormSubmit}
				>
					<CustomFormGroup
						control={control}
						error={errors.name}
						label={t("SignUpComponent.name")}
						name="name"
						placeholder={t("SignUpComponent.enterYourName")}
						type="text"
					/>
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
					<CustomFormGroup
						control={control}
						error={errors.repeatPassword}
						label={t("SignUpComponent.repeatPassword")}
						name="repeatPassword"
						placeholder={t("SignUpComponent.passwordPlaceholder")}
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
						sx={{ mt: 2 }}
						type="submit"
						variant="primary_black_bold"
					>
						{t("SignUpComponent.signUp")}
					</BaseButton>
				</Box>
				<SignInLink />
			</StyledFormContainer>
			<AuthLinks />
		</>
	);
};

export { SignUpForm };
