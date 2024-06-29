import { yupResolver } from "@hookform/resolvers/yup";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useEffect, useState } from "react";
import { Control, FieldError, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import {
	type UserResetPasswordRequestDto,
	type UserRestorePasswordForm,
} from "~/libs/types/user.ts";
import { useResetPasswordMutation } from "~/redux/auth/auth-api.ts";

import { userResetPassword } from "./reset-password-schema.ts";

type ResetPasswordFormResult = {
	control: Control<UserRestorePasswordForm>;
	errors: {
		email?: FieldError;
		name?: FieldError;
		password?: FieldError;
		repeatPassword?: FieldError;
	};
	handleFormSubmit: (event: React.FormEvent) => void;
	isLoading: boolean;
	serverError: string;
	setServerError: React.Dispatch<React.SetStateAction<string>>;
};

const useResetPasswordForm = ({
	token,
}: {
	token: string;
}): ResetPasswordFormResult => {
	const navigate = useNavigate();
	const [serverError, setServerError] = useState("");

	const [requestReset, { error, isLoading, isSuccess }] =
		useResetPasswordMutation();

	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<UserRestorePasswordForm>({
		defaultValues: {
			password: "",
			repeatPassword: "",
		},
		resolver: yupResolver(userResetPassword),
	});

	const onSubmit = (formData: UserResetPasswordRequestDto): void => {
		requestReset(formData);
	};

	const handleFormSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
		handleSubmit((data: UserRestorePasswordForm) => {
			onSubmit({
				password: data.password,
				token,
			});
		})();
	};

	useEffect(() => {
		if (isSuccess) {
			reset();
			navigate(AppRoute.SIGN_IN);
		} else if (error) {
			const err = (error as FetchBaseQueryError).data as Error;
			setServerError(err.message);
		}
	}, [isSuccess, navigate, error, reset]);

	return {
		control,
		errors,
		handleFormSubmit,
		isLoading,
		serverError,
		setServerError,
	};
};

export { useResetPasswordForm };
