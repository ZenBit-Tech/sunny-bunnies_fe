import { yupResolver } from "@hookform/resolvers/yup";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useEffect, useState } from "react";
import { Control, FieldError, useForm } from "react-hook-form";

import { type UserRestorePasswordRequestDto } from "~/libs/types/user.ts";
import { userRestorePassword } from "~/pages/auth/validation/index.ts";
import { useRestorePasswordMutation } from "~/redux/auth/auth-api.ts";

type RestorePasswordFormResult = {
	control: Control<UserRestorePasswordRequestDto>;
	errors: {
		email?: FieldError;
	};
	handleFormSubmit: (event: React.FormEvent) => void;
	isLoading: boolean;
	serverError: string;
	setServerError: React.Dispatch<React.SetStateAction<string>>;
};

const useRestorePasswordForm = (): RestorePasswordFormResult => {
	const [serverError, setServerError] = useState("");
	const [requestRestore, { error, isLoading, isSuccess }] =
		useRestorePasswordMutation();

	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
		watch,
	} = useForm<UserRestorePasswordRequestDto>({
		defaultValues: {
			email: "",
		},
		resolver: yupResolver(userRestorePassword),
	});

	const onSubmit = (formData: UserRestorePasswordRequestDto): void => {
		requestRestore(formData);
	};

	const handleFormSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
		handleSubmit((data: UserRestorePasswordRequestDto) => {
			onSubmit(data);
		})();
	};

	useEffect(() => {
		const subscription = watch((_, { name }) => {
			if (name === "email" && serverError) {
				setServerError("");
			}
		});

		return (): void => subscription.unsubscribe();
	}, [watch, serverError]);

	useEffect(() => {
		if (error) {
			const err = (error as FetchBaseQueryError).data as Error;

			setServerError(err.message);
		}
	}, [error]);

	useEffect(() => {
		if (isSuccess) {
			reset();
		}
	}, [isSuccess, error, reset]);

	return {
		control,
		errors,
		handleFormSubmit,
		isLoading,
		serverError,
		setServerError,
	};
};

export { useRestorePasswordForm };
