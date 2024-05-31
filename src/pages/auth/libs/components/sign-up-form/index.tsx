import { Box, Divider, Typography } from "@mui/material";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React from "react";
import { useTranslation } from "react-i18next";

import { BaseButton, CustomFormGroup } from "~/components/index.ts";
import theme from "~/theme.ts";

import { useSignUpForm } from "../../hooks/index.ts";
import { AuthLinks, SignInLink, StyledFormContainer } from "../index.ts";

type Properties = {
	onClick: (credentialResponse: CredentialResponse) => void;
};

const SignUpForm: React.FC<Properties> = ({ onClick }: Properties) => {
	const { t } = useTranslation();
	const { control, errors, handleFormSubmit, isLoading, serverError } =
		useSignUpForm();

	return (
		<>
			<StyledFormContainer>
				<Typography variant="playfairDisplayTitle">
					{t("SignUpComponent.createYourAccount")}
				</Typography>
				<Typography color={theme.palette.secondary.main} variant="dmSans">
					{t("SignUpComponent.signUpWithGoogle")}
				</Typography>
				<GoogleLogin logo_alignment="center" onSuccess={onClick} type="icon" />
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
