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

const SignUpLink: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Link to={AppRoute.SIGN_UP}>
			<Typography color="secondary.main" component="span" variant="dmSansBold">
				{t("SignInComponent.donNotHaveAnAccountYet")}
			</Typography>
			<Typography
				color="primary.main"
				component="span"
				ml="10px"
				variant="playfairDisplay"
			>
				{t("SignUpComponent.signUp")}
			</Typography>
		</Link>
	);
};

const ForgotPasswordLink: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Link to={AppRoute.FORGOT_PASSWORD}>
			<Typography color="primary.main" variant="playfairDisplay">
				{t("SignInComponent.forgotPassword")}
			</Typography>
		</Link>
	);
};

export { AuthLinks, ForgotPasswordLink, SignInLink, SignUpLink };
