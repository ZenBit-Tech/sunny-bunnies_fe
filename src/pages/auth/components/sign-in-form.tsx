import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { BaseButton, CustomFormGroup } from "~/components/index.ts";
import theme from "~/theme.ts";

import { useSignInForm } from "../hooks/index.ts";
import { AuthLinks, ForgotPasswordLink, SignUpLink } from "./index.ts";
import { StyledFormContainer } from "./styles.ts";

const SignInForm: React.FC = () => {
	const { t } = useTranslation();

	const { control, errors, handleFormSubmit, isLoading, serverError } =
		useSignInForm();

	return (
		<>
			<StyledFormContainer>
				<Typography variant="playfairDisplayTitle">
					{t("SignInComponent.signIn")}
				</Typography>
				<Typography color={theme.palette.secondary.main} variant="dmSans">
					{t("SignInComponent.signInWithGoogle")}
				</Typography>
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