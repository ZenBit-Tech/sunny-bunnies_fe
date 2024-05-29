import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { AppRoute } from "~/libs/enum/index.ts";

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

export { SignInLink };
