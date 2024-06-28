import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Modal,
	Select as MuiSelect,
	Typography,
} from "@mui/material";
import { City, State } from "country-state-city";
import { t } from "i18next";
import React from "react";

import { CustomFormGroup } from "~/components/index.ts";

import { StyledForm, StyledFormLabel, StyledModalContainer } from "./styles.ts";
import { useAddressForm } from "./use-address-form.ts";

type AddressModalProps = {
	addressLine: string;
	city: string;
	country: string;
	isModalOpen: boolean;
	state: string;
	toggleModal: () => void;
};

const AddressModal: React.FC<AddressModalProps> = ({
	addressLine,
	city,
	country,
	isModalOpen,
	state,
	toggleModal,
}) => {
	const {
		control,
		errors,
		filteredCountries,
		handleCityChange,
		handleCountryChange,
		handleFormSubmit,
		handleStateChange,
		selectedCity,
		selectedCountry,
		selectedState,
		serverError,
	} = useAddressForm(
		{
			addressLineOne: addressLine,
			addressLineTwo: "",
			city,
			country,
			state,
		},
		toggleModal,
	);

	return (
		<Modal open={isModalOpen}>
			<StyledModalContainer>
				<StyledForm autoComplete="off" onSubmit={handleFormSubmit}>
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
						<StyledFormLabel component="legend">
							{t("Form.country")}
						</StyledFormLabel>
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
						<StyledFormLabel component="legend">
							{t("Form.state")}
						</StyledFormLabel>
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
						<StyledFormLabel component="legend">
							{t("Form.city")}
						</StyledFormLabel>
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
					<Box display="flex" gap="20px">
						<Button sx={{ width: "30%" }} type="submit" variant="contained">
							{t("Profile.submitForm")}
						</Button>
						<Button
							onClick={toggleModal}
							sx={{ width: "30%" }}
							type="button"
							variant="outlined"
						>
							{t("Profile.cancelForm")}
						</Button>
					</Box>
				</StyledForm>
			</StyledModalContainer>
		</Modal>
	);
};

export { AddressModal };
