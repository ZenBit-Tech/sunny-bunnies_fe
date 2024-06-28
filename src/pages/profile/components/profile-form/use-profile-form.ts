import {
	BaseSyntheticEvent,
	ChangeEvent,
	useCallback,
	useMemo,
	useState,
} from "react";
import { Control, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
	CountryData,
	defaultCountries,
	parseCountry,
} from "react-international-phone";

import { SelectChangeEvent } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { useAppForm } from "~/libs/hooks/index.ts";
import { User } from "~/libs/types/user.ts";
import { type UserAndProfile } from "~/libs/types/user-profile.type.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import {
	useUpdateUserAndProfileMutation,
	useUploadMutation,
} from "~/redux/user/user-api.ts";

import { profileValidation } from "./profile-schema.ts";

type UseProfileFormReturnType = {
	control: Control<UserAndProfile>;
	errors: FieldErrors<UserAndProfile>;
	handleChangePhone: (phone: string) => void;
	handleClothingSizeChange: (event: SelectChangeEvent<string>) => void;
	handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleFormSubmit: (event: BaseSyntheticEvent) => void;
	handleJeansSizeChange: (event: SelectChangeEvent<string>) => void;
	handleShoeSizeChange: (event: SelectChangeEvent<string>) => void;
	phone: string;
	phoneCountries: CountryData[];
	selectedClothingSize: null | string;
	selectedFile: File | null | string;
	selectedJeansSize: null | string;
	selectedShoeSize: null | string;
	serverError: string;
	user: User | null;
};

const zero = 0;
const requiredCodes = ["ua", "ca"];

const useProfileForm = (): UseProfileFormReturnType => {
	const { t } = useTranslation();
	const user = useAppSelector((state) => state.auth.user);
	const [updateUserAndProfile] = useUpdateUserAndProfileMutation();
	const [upload] = useUploadMutation();
	const dispatch = useAppDispatch();

	const [serverError, setServerError] = useState("");
	const [selectedFile, setSelectedFile] = useState<File | null | string>(
		user?.profile.profilePhoto || null,
	);
	const [phone, setPhone] = useState(user?.profile.phoneNumber ?? "");
	const [selectedClothingSize, setSelectedClothingSize] = useState<
		null | string
	>(user?.profile.clothesSize ?? "");
	const [selectedShoeSize, setSelectedShoeSize] = useState<null | string>(
		user?.profile.shoeSize ?? "",
	);
	const [selectedJeansSize, setSelectedJeansSize] = useState<null | string>(
		user?.profile.jeansSize ?? "",
	);

	const phoneCountries = useMemo(() => {
		return defaultCountries.filter((country: CountryData) => {
			const { iso2 } = parseCountry(country);

			return requiredCodes.includes(iso2);
		});
	}, []);

	const { control, errors, handleSubmit, setValue } =
		useAppForm<UserAndProfile>({
			defaultValues: {
				email: user?.email ?? "",
				name: user?.name ?? "",
				profile: {
					clothesSize: user?.profile.clothesSize ?? "",
					jeansSize: user?.profile.jeansSize ?? "",
					phoneNumber: user?.profile.phoneNumber ?? "",
					profilePhoto: user?.profile.profilePhoto ?? null,
					shoeSize: user?.profile.shoeSize ?? "",
				},
			},
			validationSchema: profileValidation,
		});

	const handleChangePhone = useCallback(
		(phone: string) => {
			setPhone(phone);
			setValue("profile.phoneNumber", phone);
		},
		[setValue],
	);

	const handleClothingSizeChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			setSelectedClothingSize(event.target.value);
			setValue("profile.clothesSize", event.target.value);
		},
		[setValue],
	);

	const handleShoeSizeChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			setSelectedShoeSize(event.target.value);
			setValue("profile.shoeSize", event.target.value);
		},
		[setValue],
	);

	const handleJeansSizeChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			setSelectedJeansSize(event.target.value);
			setValue("profile.jeansSize", event.target.value);
		},
		[setValue],
	);

	const handleFileChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setSelectedFile(e.target.files ? e.target.files[zero] : null);
			setValue(
				"profile.profilePhoto",
				e.target.files ? e.target.files[zero] : null,
			);
		},
		[setValue],
	);

	const handleInputChange = useCallback(
		async (formData: UserAndProfile): Promise<void> => {
			try {
				if (formData.profile.profilePhoto instanceof File) {
					const formDataToSend = new FormData();
					formDataToSend.append("file", formData.profile.profilePhoto);
					await upload(formDataToSend).unwrap();
				}
				const formDataCopy = { ...formData };
				delete formDataCopy.profile.profilePhoto;
				const updatedUser = await updateUserAndProfile(formDataCopy).unwrap();

				dispatch(setUser(updatedUser));
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);
			}
		},
		[dispatch, t, updateUserAndProfile, upload],
	);

	const handleFormSubmit = useCallback(
		(event: BaseSyntheticEvent): void => {
			event.preventDefault();

			void handleSubmit(handleInputChange)(event);
		},
		[handleSubmit, handleInputChange],
	);

	return {
		control,
		errors,
		handleChangePhone,
		handleClothingSizeChange,
		handleFileChange,
		handleFormSubmit,
		handleJeansSizeChange,
		handleShoeSizeChange,
		phone,
		phoneCountries,
		selectedClothingSize,
		selectedFile,
		selectedJeansSize,
		selectedShoeSize,
		serverError,
		user,
	};
};

export { useProfileForm };
