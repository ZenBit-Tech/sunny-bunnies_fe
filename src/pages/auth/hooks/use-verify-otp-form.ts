import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGetUser } from "~/app/hooks.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import { User } from "~/libs/types/user.ts";
import { useVerifyOtpMutation } from "~/redux/auth/auth-api.ts";

type Properties = {
	user: User;
};

type ReturnType = {
	isOtpCodeFilled: boolean;
	onOtpCodeChange: (payload: string) => void;
	onVerifyOtpSubmit: (evt: React.FormEvent) => void;
	otpCode: string;
	serverError: null | string;
};

const useVerifyOtpForm = ({ user }: Properties): ReturnType => {
	const { refetch } = useGetUser();
	const navigate = useNavigate();

	const [otpCode, setOtpCode] = useState("");
	const OTP_LENGTH = 6;

	const isOtpCodeFilled = useMemo(
		() => otpCode.length !== OTP_LENGTH,
		[otpCode],
	);

	const onOtpCodeChange = useCallback(
		(value: string) => void setOtpCode(value),
		[setOtpCode],
	);

	const [verifyOtp, { error, isSuccess }] = useVerifyOtpMutation();
	const [serverError, setServerError] = useState<null | string>(null);

	const onVerifyOtpSubmit = useCallback(
		(evt: React.FormEvent) => {
			evt.preventDefault();

			return void verifyOtp({
				code: otpCode,
				email: user.email,
			})
				.unwrap()
				.then(() => void refetch());
		},
		[user.email, otpCode, verifyOtp, refetch],
	);

	useEffect(() => {
		if (isSuccess) {
			navigate(AppRoute.HOME);
		} else if (error) {
			const err = (error as FetchBaseQueryError).data as Error;
			setServerError(err.message);
		}
	}, [isSuccess, error, navigate]);

	return {
		isOtpCodeFilled,
		onOtpCodeChange,
		onVerifyOtpSubmit,
		otpCode,
		serverError,
	};
};

export { useVerifyOtpForm };
