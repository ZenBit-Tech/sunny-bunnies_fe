import { Box, Divider, Typography } from "@mui/material";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { BaseButton, CustomFormGroup } from "~/components/common/index.ts";
import { AppRoute } from "~/libs/enum/app-route.enum.ts";
import { useSignUpForm } from "~/libs/hooks/index.ts";
import { useAddUserGoogleMutation } from "~/redux/auth/auth-api.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/example-hooks.ts";
import theme from "~/theme.ts";

import { AuthLinks, SignInLink, StyledFormContainer } from "../index.ts";

const SignUpForm: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [addUser, { data, error, isError, isSuccess }] =
		useAddUserGoogleMutation();
	const {
		control,
		errors,
		handleFormSubmit,
		isLoading,
		serverError,
		setServerError,
	} = useSignUpForm();

	useEffect(() => {
		if (isSuccess) {
			dispatch(setUser(data));
			navigate(AppRoute.VERIFY_EMAIL);
		}
		if (isError) {
			const loadError = (error as FetchBaseQueryError).data
				? ((error as FetchBaseQueryError).data as Error)
				: { message: t("Error.unknowError") };
			setServerError(loadError.message);
		}
	}, [data, dispatch, error, isError, isSuccess, navigate, setServerError, t]);

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
					mb={2}
					mt={1}
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
						sx={{ mt: 3 }}
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
