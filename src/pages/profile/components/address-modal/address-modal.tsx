import {
	Box,
	Button,
	FormControl,
	FormLabel,
	InputLabel,
	MenuItem,
	Modal,
	Select as MuiSelect,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
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
import React, { useCallback, useState } from "react";

import { CustomFormGroup } from "~/components/index.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { type Address } from "~/libs/types/user-profile.type.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/hooks.ts";
import { useUpdateMutation } from "~/redux/user/user-api.ts";
import theme from "~/theme.ts";

type AddressModalProps = {
	addressLine: string;
	city: string;
	country: string;
	isModalOpen: boolean;
	state: string;
};

const AddressModal: React.FC<AddressModalProps> = ({
	addressLine,
	city,
	country,
	isModalOpen,
	state,
}) => {
	const dispatch = useAppDispatch();
	const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
	const [selectedState, setSelectedState] = useState<IState | null>(null);
	const [selectedCity, setSelectedCity] = useState<ICity | null>(null);
	const [serverError, setServerError] = useState("");
	const { control, errors, handleSubmit, setValue } = useAppForm<Address>({
		defaultValues: {
			addressLineOne: addressLine ?? "",
			city: city ?? "",
			country: country ?? "",
			state: state ?? "",
		},
	});

	const [update] = useUpdateMutation();

	const filteredCountries = Country.getAllCountries().filter((country) =>
		["CA"].includes(country.isoCode),
	);

	const handleCountryChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			const country = filteredCountries.find(
				(country) => country.name === event.target.value,
			);

			setSelectedCountry(country || null);
			setValue("country", country?.name || "");
			if (!country) {
				setValue("state", "");
				setValue("city", "");
				setSelectedCity(null);
				setSelectedState(null);
			}
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
			if (!state) {
				setValue("city", "");
				setSelectedCity(null);
			}
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
		async (formData: Address): Promise<void> => {
			try {
				const updatedUser = await update(formData).unwrap();
				dispatch(setUser(updatedUser));
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);
			}
		},
		[dispatch, update],
	);

	const handleFormSubmit = useCallback(
		(event: React.BaseSyntheticEvent): void => {
			event.preventDefault();
			void handleSubmit(handleInputChange)(event);
		},
		[handleSubmit, handleInputChange],
	);

	return (
		<Modal open={isModalOpen}>
			<Box
				boxShadow={24}
				sx={{
					backgroundColor: "white",
					borderRadius: "10px",
					left: "35%",
					maxWidth: "600px",
					padding: "20px",
					position: "absolute",
					top: "25%",
					width: "70%",
				}}
			>
				<Box
					autoComplete="off"
					component="form"
					display="flex"
					flexDirection="column"
					gap="20px"
					onSubmit={handleFormSubmit}
				>
					<CustomFormGroup
						control={control}
						error={errors.addressLineOne}
						label={t("Form.adressFirstLine")}
						name="addressLineOne"
						placeholder={t("Form.enterYourAddress")}
						sx={{ margin: 0 }}
						type="text"
					/>
					<FormControl component="fieldset" error={Boolean(errors.country)}>
						<FormLabel
							component="legend"
							sx={{
								color: theme.palette.primary.main,
								...theme.typography.playfairDisplay,
								marginBottom: "8px",
							}}
						>
							{t("Form.country")}
						</FormLabel>
						{!selectedCountry && (
							<InputLabel shrink={false}>{t("Form.selectCountry")}</InputLabel>
						)}
						<MuiSelect
							onChange={handleCountryChange}
							value={selectedCountry ? selectedCountry.name : ""}
						>
							<MenuItem value="">{t("Form.selectCountry")}</MenuItem>
							{filteredCountries.map((country) => (
								<MenuItem key={country.isoCode} value={country.name}>
									{country.name}
								</MenuItem>
							))}
						</MuiSelect>
					</FormControl>
					<FormControl component="fieldset" error={Boolean(errors.state)}>
						<FormLabel
							component="legend"
							sx={{
								color: theme.palette.primary.main,
								...theme.typography.playfairDisplay,
								marginBottom: "8px",
							}}
						>
							{t("Form.state")}
						</FormLabel>
						{!selectedState && (
							<InputLabel shrink={false}>{t("Form.selectState")}</InputLabel>
						)}
						<MuiSelect
							disabled={!selectedCountry}
							onChange={handleStateChange}
							value={selectedState ? selectedState.name : ""}
						>
							<MenuItem value="">{t("Form.selectState")}</MenuItem>
							{selectedCountry &&
								State.getStatesOfCountry(selectedCountry.isoCode).map(
									(state) => (
										<MenuItem key={state.isoCode} value={state.name}>
											{state.name}
										</MenuItem>
									),
								)}
						</MuiSelect>
					</FormControl>
					<FormControl component="fieldset" error={Boolean(errors.city)}>
						<FormLabel
							component="legend"
							sx={{
								color: theme.palette.primary.main,
								...theme.typography.playfairDisplay,
								marginBottom: "8px",
							}}
						>
							{t("Form.city")}
						</FormLabel>
						{!selectedCity && (
							<InputLabel shrink={false}>{t("Form.selectCity")}</InputLabel>
						)}
						<MuiSelect
							disabled={!selectedState}
							onChange={handleCityChange}
							value={selectedCity ? selectedCity.name : ""}
						>
							<MenuItem value="">{t("Form.selectCity")}</MenuItem>
							{selectedState &&
								City.getCitiesOfState(
									selectedState.countryCode,
									selectedState.isoCode,
								).map((city) => (
									<MenuItem key={city.name} value={city.name}>
										{city.name}
									</MenuItem>
								))}
						</MuiSelect>
					</FormControl>
					{serverError && (
						<Typography color="error" variant="body2">
							{serverError}
						</Typography>
					)}

					<Button sx={{ width: "30%" }} type="submit" variant="contained">
						{t("Profile.submitForm")}
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export { AddressModal };
