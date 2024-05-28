import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { AppRoute } from "~/libs/enum/index.ts";

const AuthLinks: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				display: "flex",
				gap: "10px",
				justifyContent: "space-between",
				marginX: "auto",
				my: 8,
				width: "80%",
			}}
		>
			<Link to={AppRoute.PRIVACY_POLICY}>
				<Typography color="primary" component="span" variant="playfairDisplay">
					{t("SignUpComponent.privacyPolicy")}
				</Typography>
			</Link>
			<Link to={AppRoute.TERMS_OF_USE}>
				<Typography color="primary" component="span" variant="playfairDisplay">
					{t("SignUpComponent.termsOfUse")}
				</Typography>
			</Link>
		</Box>
	);
};

const SignInLink: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Link to={AppRoute.SIGN_IN}>
			<Typography color="secondary.main" component="span" variant="dmSansBold">
				{t("SignUpComponent.doYouHaveAnAccount")}
			</Typography>
			<Typography
				color="primary.main"
				component="span"
				ml="10px"
				variant="playfairDisplay"
			>
				{t("SignUpComponent.signIn")}
			</Typography>
		</Link>
	);
};

export { AuthLinks, SignInLink };
