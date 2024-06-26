import { SelectChangeEvent } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import {
	City,
	Country,
	ICity,
	ICountry,
	IState,
	State,
} from "country-state-city";
import { t } from "i18next";
import { BaseSyntheticEvent, useCallback, useEffect, useState } from "react";
import { Control, FieldErrors } from "react-hook-form";

import { useAppForm } from "~/libs/hooks/index.ts";
import { Address } from "~/libs/types/user-profile.type.ts";
import { addressValidation } from "~/pages/profile-board/validation/index.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/hooks.ts";
import { useUpdateMutation } from "~/redux/user/user-api.ts";

type UseAddressFormReturn = {
	control: Control<Address>;
	errors: FieldErrors<Address>;
	handleCityChange: (event: SelectChangeEvent<string>) => void;
	handleCountryChange: (event: SelectChangeEvent<string>) => void;
	handleFormSubmit: (event: BaseSyntheticEvent) => void;
	handleStateChange: (event: SelectChangeEvent<string>) => void;
	selectedCity: ICity | null;
	selectedCountry: ICountry | null;
	selectedState: IState | null;
	serverError: string;
};

const useAddressForm = (
	initialValues: Address,
	toggleModal: () => void,
): UseAddressFormReturn => {
	const dispatch = useAppDispatch();
	const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
	const [selectedState, setSelectedState] = useState<IState | null>(null);
	const [selectedCity, setSelectedCity] = useState<ICity | null>(null);
	const [serverError, setServerError] = useState("");
	const { control, errors, handleSubmit, setValue } = useAppForm<Address>({
		defaultValues: initialValues,
		validationSchema: addressValidation,
	});

	const [update] = useUpdateMutation();

	const filteredCountries = Country.getAllCountries().filter((country) =>
		["CA"].includes(country.isoCode),
	);

	useEffect(() => {
		const initCountry =
			filteredCountries.find((c) => c.name === initialValues.country) || null;
		setSelectedCountry(initCountry);
		setValue("country", initCountry?.name || "");

		if (initCountry) {
			const initState =
				State.getStatesOfCountry(initCountry.isoCode).find(
					(s) => s.name === initialValues.state,
				) || null;
			setSelectedState(initState);
			setValue("state", initState?.name || "");

			if (initState) {
				const initCity =
					City.getCitiesOfState(initState.countryCode, initState.isoCode).find(
						(c) => c.name.toLowerCase() === initialValues.city.toLowerCase(),
					) || null;

				setSelectedCity(initCity);
				setValue("city", initCity?.name || "");
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleCountryChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			const country = filteredCountries.find(
				(country) => country.name === event.target.value,
			);

			setSelectedCountry(country || null);
			setValue("country", country?.name || "");
			setSelectedState(null);
			setValue("state", "");
			setSelectedCity(null);
			setValue("city", "");
		},
		[filteredCountries, setValue],
	);

	const handleStateChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			const state = selectedCountry
				? State.getStatesOfCountry(selectedCountry.isoCode).find(
						(state) => state.name === event.target.value,
				  )
				: null;

			setSelectedState(state || null);
			setValue("state", state?.name || "");
			setSelectedCity(null);
			setValue("city", "");
		},
		[selectedCountry, setValue],
	);

	const handleCityChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			const city = selectedState
				? City.getCitiesOfState(
						selectedState.countryCode,
						selectedState.isoCode,
				  ).find((city) => city.name === event.target.value)
				: null;

			setSelectedCity(city || null);
			setValue("city", city?.name || "");
		},
		[selectedState, setValue],
	);

	const handleInputChange = useCallback(
		async (formData: Address): Promise<boolean> => {
			try {
				const updatedUser = await update(formData).unwrap();
				dispatch(setUser(updatedUser));

				return true;
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);

				return false;
			}
		},
		[dispatch, update],
	);

	const handleFormSubmit = useCallback(
		async (event: BaseSyntheticEvent): Promise<void> => {
			event.preventDefault();
			const isSuccess = void handleSubmit(handleInputChange)(event);
			if (isSuccess) {
				toggleModal();
			}
		},
		[handleSubmit, handleInputChange, toggleModal],
	);

	return {
		control,
		errors,
		handleCityChange,
		handleCountryChange,
		handleFormSubmit,
		handleStateChange,
		selectedCity,
		selectedCountry,
		selectedState,
		serverError,
	};
};

export { useAddressForm };
