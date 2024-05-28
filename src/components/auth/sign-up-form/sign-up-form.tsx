import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { BaseButton, CustomFormGroup } from "~/components/common/index.ts";
import { useSignUpForm } from "~/libs/hooks/index.ts";
import theme from "~/theme.ts";

import {
	AuthLinks,
	GoogleButton,
	SignInLink,
	StyledFormContainer,
} from "../index.ts";

const SignUpForm: React.FC = () => {
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
				<GoogleButton />
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
						label="Name*"
						name="name"
						placeholder="Enter your name"
						type="text"
					/>
					<CustomFormGroup
						control={control}
						error={errors.email}
						label="Email"
						name="email"
						placeholder="your_email@gmail.com"
						type="email"
					/>
					<CustomFormGroup
						control={control}
						error={errors.password}
						label="Password*"
						name="password"
						placeholder="Min. 8 characters"
						type="password"
					/>
					<CustomFormGroup
						control={control}
						error={errors.repeatPassword}
						label="Repeat Password*"
						name="repeatPassword"
						placeholder="Min. 8 characters"
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
