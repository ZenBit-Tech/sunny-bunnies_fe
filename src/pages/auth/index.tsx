import { Box, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import {
	Navigate,
	matchPath,
	useLocation,
	useSearchParams,
} from "react-router-dom";

import { authImages } from "~/assets/images/auth/index.ts";
import Logo from "~/assets/images/logo/big.png";
import { Link } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import ResetPasswordForm from "~/pages/auth/components/reset-password-form/index.tsx";
import { RestorePasswordForm } from "~/pages/auth/components/restore-password-form/index.tsx";

import { SignInForm, SignUpForm, VerifyEmailForm } from "./components/index.ts";
import styles from "./styles.module.css";

const NoLogoRoutes = [AppRoute.VERIFY_EMAIL];

const Auth: React.FC = () => {
	const { pathname } = useLocation();
	const [searchParams] = useSearchParams();
	const { t } = useTranslation();

	const getScreen = (screen: string): React.ReactNode => {
		switch (screen) {
			case AppRoute.SIGN_IN: {
				return <SignInForm />;
			}
			case AppRoute.SIGN_UP: {
				return <SignUpForm />;
			}
			case AppRoute.VERIFY_EMAIL: {
				return <VerifyEmailForm />;
			}
			case AppRoute.RESTORE_PASSWORD: {
				return <RestorePasswordForm />;
			}
			case AppRoute.RESET_PASSWORD: {
				const token = searchParams.get("token");

				if (!token) return <Navigate to={AppRoute.HOME} />;

				return <ResetPasswordForm token={token} />;
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
			case AppRoute.VERIFY_EMAIL:
				return authImages.VerifyEmailImage;
			case AppRoute.RESTORE_PASSWORD: {
				return authImages.RestorePasswordImage;
			}
			case AppRoute.RESET_PASSWORD: {
				return authImages.ResetPasswordImage;
			}
			default:
				return authImages.SignUpImage;
		}
	};

	return (
		<Grid component="main" container sx={{ minHeight: "100vh" }}>
			<Grid
				item
				md={6}
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
				{!NoLogoRoutes.some((route) => matchPath(pathname, route)) ? (
					<Box
						sx={{
							left: 63,
							position: "absolute",
							top: 42,
						}}
					>
						<Link to={AppRoute.HOME}>
							<img
								alt={t("AuthPage.logo")}
								className={styles["auth__logo"]}
								src={Logo}
							/>
						</Link>
					</Box>
				) : null}
			</Grid>
			<Grid
				item
				md={6}
				sm={12}
				sx={{
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
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
