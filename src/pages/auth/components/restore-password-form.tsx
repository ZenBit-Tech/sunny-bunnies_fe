import { Box, Icon, Stack, Typography } from "@mui/material";
import { t } from "i18next";
import React from "react";

import { ArrowLeftIcon } from "~/assets/icons/arrow-left-icon.tsx";
import { BaseButton, CustomFormGroup, Link } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import { StyledFormContainer } from "~/pages/auth/components/styles.ts";
import { useRestorePasswordForm } from "~/pages/auth/hooks/index.ts";
import theme from "~/theme.ts";

const RestorePasswordForm: React.FC = () => {
	const { control, errors, handleFormSubmit, serverError } =
		useRestorePasswordForm();

	return (
		<StyledFormContainer width="60%">
			<Stack alignItems="center" direction="row" gap={1}>
				<Link to={AppRoute.SIGN_IN}>
					<Icon>
						<ArrowLeftIcon />
					</Icon>
				</Link>
				<Typography
					color={theme.palette.primary.main}
					variant="playfairDisplayTitle"
				>
					{t("Restore password")}
				</Typography>
			</Stack>
			<Typography color={theme.palette.secondary.main} variant="dmSans">
				{t("Enter your email for restore")}
			</Typography>
			<Stack flexDirection="column" gap={0} width="100%">
				<CustomFormGroup
					control={control}
					error={errors.email}
					label={t("SignUpComponent.email")}
					name="email"
					placeholder={t("SignUpComponent.emailExample")}
					type="email"
				/>
				{serverError && (
					<Typography color="error" fontSize={12} variant="body2">
						{serverError}
					</Typography>
				)}
			</Stack>
			<Box component="form" onSubmit={handleFormSubmit} width="100%">
				<BaseButton fullWidth type="submit" variant="primary_black_bold">
					{t("Send Code")}
				</BaseButton>
			</Box>
		</StyledFormContainer>
	);
};

export { RestorePasswordForm };
