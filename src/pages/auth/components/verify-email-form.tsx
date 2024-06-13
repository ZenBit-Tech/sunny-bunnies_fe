import { Box, Icon, Stack, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ArrowLeftIcon } from "~/assets/icons/arrow-left-icon.tsx";
import { BaseButton } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import { useTimer } from "~/libs/hooks/index.ts";
import { User } from "~/libs/types/user.ts";
import { StyledFormContainer } from "~/pages/auth/components/styles.ts";
import { useVerifyOtpForm } from "~/pages/auth/hooks/use-verify-otp-form.ts";
import { useVerifyEmailMutation } from "~/redux/auth/auth-api.ts";
import { logout } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import theme from "~/theme.ts";

const VerifyEmailForm: React.FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => ({
		user: state.auth.user as User,
	}));

	const { resetTimer, startTimer, stopTimer, timeRemaining } = useTimer({
		min: 2,
		sec: 0,
	});

	const [verifyEmail, { isSuccess: isVerifyEmailRequestSuccess }] =
		useVerifyEmailMutation();

	const {
		isOtpCodeFilled,
		onOtpCodeChange,
		onVerifyOtpSubmit,
		otpCode,
		serverError,
	} = useVerifyOtpForm({ user });

	const handleArrowBackClick = useCallback(() => {
		dispatch(logout());
		navigate(AppRoute.SIGN_IN);
	}, [dispatch, navigate]);

	const handleSendAgainClick = useCallback(() => {
		resetTimer();
		stopTimer();

		verifyEmail({
			email: user.email,
		});
	}, [verifyEmail, resetTimer, stopTimer, user.email]);

	useEffect(() => {
		verifyEmail({
			email: user.email,
		});
	}, []);

	useEffect(() => {
		if (isVerifyEmailRequestSuccess) void startTimer();
	}, [isVerifyEmailRequestSuccess, startTimer]);

	return (
		<StyledFormContainer>
			<Stack alignItems="center" direction="row" gap={1}>
				<Icon onClick={handleArrowBackClick}>
					<ArrowLeftIcon />
				</Icon>
				<Typography
					color={theme.palette.primary.main}
					variant="playfairDisplayTitle"
				>
					{t("Verification Email")}
				</Typography>
			</Stack>
			<Typography color={theme.palette.secondary.main} variant="dmSans">
				{t("We have sent OTP verification code to your email")}
			</Typography>
			<Stack gap={2}>
				<Typography
					color="primary"
					component="span"
					fontSize={20}
					variant="playfairDisplay"
				>
					{t("Code")}
				</Typography>
				<MuiOtpInput length={6} onChange={onOtpCodeChange} value={otpCode} />
			</Stack>
			<Stack
				alignItems="center"
				direction="row"
				justifyContent="space-between"
				width="100%"
			>
				<Typography color={theme.palette.secondary.main} variant="dmSans">
					{t(`will expire in ${timeRemaining}`)}
				</Typography>
				<BaseButton
					onClick={handleSendAgainClick}
					sx={{
						color: theme.palette.primary.main,
						fontFamily: "Playfair Display",
						fontSize: 20,
						fontWeight: 600,
						textTransform: "capitalize",
					}}
					variant="text"
				>
					{t("Send again")}
				</BaseButton>
			</Stack>
			<Box component="form" onSubmit={onVerifyOtpSubmit} width="100%">
				{serverError && (
					<Typography color="error" fontSize={16} variant="body2">
						{serverError}
					</Typography>
				)}
				<BaseButton
					disabled={isOtpCodeFilled}
					fullWidth
					sx={{ mt: 2 }}
					type="submit"
					variant="primary_black_bold"
				>
					{t("Verify")}
				</BaseButton>
			</Box>
		</StyledFormContainer>
	);
};

export { VerifyEmailForm };
