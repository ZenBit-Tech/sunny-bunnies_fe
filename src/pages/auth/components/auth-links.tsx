import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";

const AuthLinks: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				display: "flex",
				gap: "10px",
				justifyContent: "space-between",
				marginX: "auto",
				paddingBottom: "15px",
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

export { AuthLinks };
