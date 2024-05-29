import { yupResolver } from "@hookform/resolvers/yup";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useEffect, useState } from "react";
import { Control, FieldError, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { AppRoute, exceptionMessage } from "~/libs/enum/index.ts";
import { useLoginMutation } from "~/redux/auth/auth-api.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/hooks/index.ts";
import { type UserSignInRequestDto } from "~/redux/user/types/index.ts";
import { userSignInValidation } from "~/redux/user/validation/index.ts";

type SignInFormResult = {
	control: Control<UserSignInRequestDto>;
	errors: {
		email?: FieldError;
		password?: FieldError;
	};
	handleFormSubmit: (event: React.FormEvent) => void;
	isLoading: boolean;
	serverError: string;
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
		if (data) dispatch(setUser(data));
	}, [data, dispatch]);

	useEffect(() => {
		if (isSuccess) {
			reset();
			navigate(AppRoute.ONBOARDING);
		} else if (error) {
			const err = (error as FetchBaseQueryError).data as Error;

			if (err.message === exceptionMessage.EMAIL_CONFIRM) {
				navigate(AppRoute.VERIFY_EMAIL);
			} else {
				setServerError(err.message);
			}
		}
	}, [isSuccess, navigate, error, reset]);

	return { control, errors, handleFormSubmit, isLoading, serverError };
};

export { useSignInForm };
