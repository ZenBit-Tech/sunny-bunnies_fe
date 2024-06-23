import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import { User } from "~/libs/types/user.ts";
import {
	useGetUserQuery,
	useVerifyOtpMutation,
} from "~/redux/auth/auth-api.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/hooks.ts";

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
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

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

	const [verifyOtp, { data: verifiedUser, error, isSuccess }] =
		useVerifyOtpMutation();
	const { refetch } = useGetUserQuery(undefined);
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
		[verifyOtp, otpCode, user.email, refetch],
	);

	useEffect(() => {
		if (isSuccess && verifiedUser) {
			dispatch(setUser(verifiedUser));
			navigate(AppRoute.ROLE);
		} else if (error) {
			const err = (error as FetchBaseQueryError).data as Error;
			setServerError(err.message);
		}
	}, [isSuccess, error, verifiedUser, navigate, dispatch]);

	return {
		isOtpCodeFilled,
		onOtpCodeChange,
		onVerifyOtpSubmit,
		otpCode,
		serverError,
	};
};

export { useVerifyOtpForm };
