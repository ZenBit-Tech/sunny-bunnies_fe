import { Box, Icon, Stack, Typography } from "@mui/material";
import { t } from "i18next";
import React from "react";

import { ArrowLeftIcon } from "~/assets/icons/arrow-left-icon.tsx";
import { BaseButton, CustomFormGroup, Link } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import { StyledFormContainer } from "~/pages/auth/components/styles.ts";
import theme from "~/theme.ts";

import { useResetPasswordForm } from "./use-reset-password-form.hook.ts";

type Properties = {
	token: string;
};

const ResetPasswordForm: React.FC<Properties> = ({ token }: Properties) => {
	const { control, errors, handleFormSubmit, serverError } =
		useResetPasswordForm({ token });

	return (
		<StyledFormContainer width="60%">
			<Stack alignItems="center" direction="row" gap={1}>
				<Link to={AppRoute.RESTORE_PASSWORD}>
					<Icon>
						<ArrowLeftIcon />
					</Icon>
				</Link>
				<Typography
					color={theme.palette.primary.main}
					variant="playfairDisplayTitle"
				>
					{t("Enter new password")}
				</Typography>
			</Stack>
			<CustomFormGroup
				control={control}
				error={errors.password}
				label={t("Password")}
				name="password"
				placeholder={t("SignUpComponent.passwordPlaceholder")}
				type="password"
			/>
			<CustomFormGroup
				control={control}
				error={errors.repeatPassword}
				label={t("Repeat password")}
				name="repeatPassword"
				placeholder={t("SignUpComponent.passwordPlaceholder")}
				type="password"
			/>
			<Box component="form" onSubmit={handleFormSubmit} width="100%">
				{serverError && (
					<Typography color="error" fontSize={16} mb={1} variant="body2">
						{serverError}
					</Typography>
				)}
				<BaseButton fullWidth type="submit" variant="primary_black_bold">
					{t("Save & Login")}
				</BaseButton>
			</Box>
		</StyledFormContainer>
	);
};

export default ResetPasswordForm;
