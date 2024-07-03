import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { AppRoute } from "~/libs/constants/index.ts";

const ForgotPasswordLink: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Box mt={5}>
			<Link to={AppRoute.RESTORE_PASSWORD}>
				<Typography color="primary.main" variant="playfairDisplay">
					{t("SignInComponent.forgotPassword")}
				</Typography>
			</Link>
		</Box>
	);
};

export { ForgotPasswordLink };
