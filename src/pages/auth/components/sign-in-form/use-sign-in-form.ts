import { yupResolver } from "@hookform/resolvers/yup";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useEffect, useState } from "react";
import { Control, FieldError, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/index.ts";
import { type UserSignInRequestDto } from "~/libs/types/user.ts";
import { userSignInValidation } from "~/pages/auth/validation/sign-in-schema.ts";
import { useLoginMutation } from "~/redux/auth/auth-api.ts";
import { setTokens, setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/hooks.ts";

import { exceptionMessage } from "../../constants.ts";

type SignInFormResult = {
	control: Control<UserSignInRequestDto>;
	errors: {
		email?: FieldError;
		password?: FieldError;
	};
	handleFormSubmit: (event: React.FormEvent) => void;
	isLoading: boolean;
	serverError: string;
	setServerError: React.Dispatch<React.SetStateAction<string>>;
};

const useSignInForm = (): SignInFormResult => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [serverError, setServerError] = useState("");
	const [register, { data, error, isLoading, isSuccess }] = useLoginMutation();

	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
		watch,
	} = useForm<UserSignInRequestDto>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: yupResolver(userSignInValidation),
	});

	const onSubmit = (formData: UserSignInRequestDto): void => {
		register(formData);
	};

	const handleFormSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
		handleSubmit((data: UserSignInRequestDto) => {
			onSubmit(data);
		})();
	};

	useEffect(() => {
		if (data) {
			dispatch(setUser(data.user));
			dispatch(setTokens(data));
		}
	}, [data, dispatch]);

	useEffect(() => {
		if (isSuccess) {
			reset();
			navigate(AppRoute.HOME);
		} else if (error) {
			const err = (error as FetchBaseQueryError).data as Error;

			if (err.message === exceptionMessage.EMAIL_CONFIRM) {
				navigate(AppRoute.VERIFY_EMAIL);
			} else {
				setServerError(err.message);
			}
		}
	}, [isSuccess, navigate, error, reset]);

	useEffect(() => {
		const subscription = watch((_, { name }) => {
			if ((name === "password" || name === "email") && serverError) {
				setServerError("");
			}
		});

		return (): void => subscription.unsubscribe();
	}, [watch, serverError]);

	return {
		control,
		errors,
		handleFormSubmit,
		isLoading,
		serverError,
		setServerError,
	};
};

export { useSignInForm };
