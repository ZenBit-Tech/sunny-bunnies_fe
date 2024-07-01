import {
	type Control,
	type DefaultValues,
	type FieldErrors,
	type FieldValues,
	type UseFormClearErrors,
	type UseFormGetValues,
	type UseFormHandleSubmit,
	type UseFormProps,
	type UseFormRegister,
	type UseFormReset,
	type UseFormSetValue,
	type UseFormStateReturn,
	type UseFormWatch,
	type ValidationMode,
	useForm,
} from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema } from "yup";

type Parameters<T extends FieldValues = FieldValues> = {
	defaultValues: DefaultValues<T>;
	mode?: keyof ValidationMode;
	validationSchema?: AnyObjectSchema;
};

type ReturnValue<T extends FieldValues = FieldValues> = {
	clearErrors: UseFormClearErrors<T>;
	control: Control<T, null>;
	errors: FieldErrors<T>;
	formState: UseFormStateReturn<T>;
	getValues: UseFormGetValues<T>;
	handleSubmit: UseFormHandleSubmit<T>;
	register: UseFormRegister<T>;
	reset: UseFormReset<T>;
	setValue: UseFormSetValue<T>;
	watch: UseFormWatch<T>;
};

const useAppForm = <T extends FieldValues = FieldValues>({
	defaultValues,
	mode = "all",
	validationSchema,
}: Parameters<T>): ReturnValue<T> => {
	let parameters: UseFormProps<T> = {
		defaultValues,
		mode,
	};

	if (validationSchema) {
		parameters = {
			...parameters,
			resolver: yupResolver(validationSchema),
		};
	}

	const {
		clearErrors,
		control,
		formState: { errors },
		formState,
		getValues,
		handleSubmit,
		register,
		reset,
		setValue,
		watch,
	} = useForm<T>(parameters);

	return {
		clearErrors,
		control,
		errors,
		formState,
		getValues,
		handleSubmit,
		register,
		reset,
		setValue,
		watch,
	};
};

export { useAppForm };
