import { yupResolver } from "@hookform/resolvers/yup";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useEffect, useState } from "react";
import { Control, FieldError, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/enum/index.ts";
import { useRegisterMutation } from "~/redux/auth/auth-api.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/hooks/index.ts";
import { UserSignUpFormData } from "~/redux/user/types/index.ts";
import { userSignUpValidation } from "~/redux/user/validation/sign-up-schema.ts";

interface SignUpFormResult {
	control: Control<UserSignUpFormData>;
	errors: {
		email?: FieldError;
		name?: FieldError;
		password?: FieldError;
		repeatPassword?: FieldError;
	};
	handleFormSubmit: (event: React.FormEvent) => void;
	isLoading: boolean;
	serverError: string;
}

const useSignUpForm = (): SignUpFormResult => {
	const navigate = useNavigate();

	const [serverError, setServerError] = useState("");
	const [register, { data, error, isLoading, isSuccess }] =
		useRegisterMutation();

	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<UserSignUpFormData>({
		defaultValues: {
			email: "",
			name: "",
			password: "",
			repeatPassword: "",
		},
		resolver: yupResolver(userSignUpValidation),
	});
	const dispatch = useAppDispatch();
	const onSubmit = (
		formData: Omit<UserSignUpFormData, "repeatPassword">,
	): void => {
		register(formData);
	};

	const handleFormSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
		handleSubmit((data: UserSignUpFormData) => {
			const { repeatPassword, ...formData } = data;
			onSubmit(formData);
		})();
	};

	useEffect(() => {
		if (data) dispatch(setUser(data));
	}, [data, dispatch]);

	useEffect(() => {
		if (isSuccess) {
			reset();
			navigate(AppRoute.VERIFY_EMAIL);
		} else if (error) {
			const err = (error as FetchBaseQueryError).data as Error;
			setServerError(err.message);
		}
	}, [isSuccess, navigate, error, reset]);

	return { control, errors, handleFormSubmit, isLoading, serverError };
};

export { useSignUpForm };
