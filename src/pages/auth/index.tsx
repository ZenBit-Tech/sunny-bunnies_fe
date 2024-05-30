import { Box, Grid, Paper } from "@mui/material";
import { CredentialResponse } from "@react-oauth/google";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "~/assets/images/Logo/Big.png";
import { authImages } from "~/assets/images/auth/index.ts";
import { SignInForm, SignUpForm } from "~/components/common/index.ts";
import { AppRoute } from "~/libs/enum/index.ts";
import { useSignUpForm } from "~/libs/hooks/index.ts";
import { useAddUserGoogleMutation } from "~/redux/auth/auth-api.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/hooks/index.ts";

import styles from "./styles.module.css";

const Auth: React.FC = () => {
	const { pathname } = useLocation();
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [addUser, { data, error, isError, isSuccess }] =
		useAddUserGoogleMutation();
	const { setServerError } = useSignUpForm();

	useEffect(() => {
		if (isSuccess) {
			dispatch(setUser(data));
			navigate(AppRoute.VERIFY_EMAIL);
		}
		if (isError) {
			const loadError = (error as FetchBaseQueryError).data
				? ((error as FetchBaseQueryError).data as Error)
				: { message: t("Error.unknowError") };
			setServerError(loadError.message);
		}
	}, [data, dispatch, error, isError, isSuccess, navigate, setServerError, t]);

	const onSuccess = useCallback(
		async (credentialResponse: CredentialResponse) => {
			try {
				await addUser(credentialResponse);
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);
			}
		},
		[addUser, setServerError, t],
	);

	const getScreen = (screen: string): React.ReactNode => {
		switch (screen) {
			case AppRoute.SIGN_IN: {
				return <SignInForm />;
			}
			case AppRoute.SIGN_UP: {
				return <SignUpForm onClick={onSuccess} />;
			}
			default: {
				return <SignUpForm onClick={onSuccess} />;
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
					<img alt="Logo" className={styles["auth__logo"]} src={Logo} />
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
					justifyContent: "space-between",
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
