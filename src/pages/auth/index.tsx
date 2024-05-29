import { Box, Grid, Paper } from "@mui/material";
import { t } from "i18next";
import React from "react";
import { useLocation } from "react-router-dom";

import Logo from "~/assets/images/Logo/Big.png";
import { authImages } from "~/assets/images/auth/index.ts";
import { SignInForm, SignUpForm } from "~/components/common/index.ts";
import { AppRoute } from "~/libs/enum/index.ts";

import styles from "./styles.module.css";

const Auth: React.FC = () => {
	const { pathname } = useLocation();

	const getScreen = (screen: string): React.ReactNode => {
		switch (screen) {
			case AppRoute.SIGN_IN: {
				return <SignInForm />;
			}
			case AppRoute.SIGN_UP: {
				return <SignUpForm />;
			}
			default: {
				return <SignUpForm />;
			}
		}
	};

	const getBackgroundImage = (screen: string): string => {
		switch (screen) {
			case AppRoute.SIGN_IN:
				return authImages.SignInImage;
			case AppRoute.SIGN_UP:
				return authImages.SignUpImage;
			default:
				return authImages.SignUpImage;
		}
	};

	return (
		<Grid component="main" container sx={{ height: "100vh" }}>
			<Grid
				item
				md={5}
				sm={4}
				sx={{
					backgroundImage: `url(${getBackgroundImage(pathname)})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					display: { md: "block", xs: "none" },
				}}
				xl={7}
				xs={false}
			>
				<Box
					sx={{
						left: 63,
						position: "absolute",
						top: 42,
					}}
				>
					<img
						alt={t("AuthPage.logo")}
						className={styles["auth__logo"]}
						src={Logo}
					/>
				</Box>
			</Grid>
			<Grid
				component={Paper}
				elevation={6}
				item
				md={7}
				sm={12}
				square
				sx={{
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					padding: 7,
				}}
				xl={5}
				xs={12}
			>
				{getScreen(pathname)}
			</Grid>
		</Grid>
	);
};

export { Auth };
