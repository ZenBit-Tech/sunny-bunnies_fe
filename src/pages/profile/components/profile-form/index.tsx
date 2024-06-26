import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	InputLabel,
	MenuItem,
	Select as MuiSelect,
	Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import {
	CountryData,
	PhoneInput,
	defaultCountries,
	parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";

import {
	BaseButton,
	CustomFormGroup,
	ImagePreview,
} from "~/components/index.ts";
import { fontSizes } from "~/libs/constants/fonts.ts";
import {
	clothingSizes,
	jeansSizes,
	shoeSizes,
} from "~/pages/profile-board/constants.ts/size.ts";
import theme from "~/theme.ts";

import { useProfileForm } from "../../hooks/use-profile-form.ts";
import { ProfileAddress, ProfileCard } from "../index.ts";
import { StyledInputWrapper, VisuallyHiddenInput } from "./styles.ts";

const ProfileForm: React.FC = () => {
	const { t } = useTranslation();
	const {
		control,
		errors,
		handleChangePhone,
		handleClothingSizeChange,
		handleFileChange,
		handleFormSubmit,
		handleJeansSizeChange,
		handleShoeSizeChange,
		phone,
		selectedClothingSize,
		selectedFile,
		selectedJeansSize,
		selectedShoeSize,
		serverError,
		user,
	} = useProfileForm();

	const requiredCodes = ["ua", "ca"];

	const countries = defaultCountries.filter((country: CountryData) => {
		const { iso2 } = parseCountry(country);

		return requiredCodes.includes(iso2);
	});

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "24px",
				padding: "24px",
			}}
			width="80%"
		>
			<Typography fontSize={fontSizes.large} variant="playfairDisplayBold">
				{t("Profile.generalInformation")}
			</Typography>
			<Box
				autoComplete="off"
				component="form"
				mb={1}
				onSubmit={handleFormSubmit}
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "16px",
					width: "100%",
				}}
			>
				<Box alignItems="center" display="flex">
					<Box width="30%">
						<Typography
							color="primary"
							marginBottom="8px"
							sx={{ fontSize: theme.typography.playfairDisplayBold }}
						>
							{t("Profile.profilePhotoTitle")}
						</Typography>
						<Typography
							sx={{
								color: theme.palette.fontGray,
								fontSize: theme.typography.dmSans,
							}}
							variant="body1"
						>
							{t("Profile.profilePhotoText")}
						</Typography>
					</Box>
					<FormControl
						component="fieldset"
						error={Boolean(errors.profile?.profilePhoto)}
						sx={{
							alignItems: "center",
							display: "flex",
							flexDirection: "row",
							gap: "48px",
							width: "70%",
						}}
					>
						<ImagePreview file={selectedFile} />
						<Button
							component="label"
							role={undefined}
							sx={{
								alignItems: "center",
								border: "solid",
								borderRadius: "8px",
								borderWidth: "1px",
								display: "flex",
								height: "40px",
								justifyContent: "center",
								margin: "5px",
								minWidth: "143px",
								padding: "8px",
							}}
							tabIndex={-1}
							variant="primary_black_bold"
						>
							{t("Form.uploadButtonText")}
							<VisuallyHiddenInput onChange={handleFileChange} type="file" />
						</Button>
						{errors.profile?.profilePhoto && (
							<FormHelperText sx={{ marginLeft: 0 }}>
								{errors.profile.profilePhoto.message as string}
							</FormHelperText>
						)}
					</FormControl>
				</Box>
				<CustomFormGroup
					control={control}
					error={errors?.name}
					label={t("Profile.formName")}
					name="name"
					placeholder={t("Profile.enterYourName")}
					type="text"
				/>
				<CustomFormGroup
					control={control}
					error={errors?.email}
					label={t("Profile.formEmail")}
					name="email"
					placeholder={t("Profile.emailExample")}
					type="email"
				/>
				<FormControl
					component="fieldset"
					error={Boolean(errors.profile?.phoneNumber)}
				>
					<FormLabel
						sx={{
							color: theme.palette.primary.main,
							...theme.typography.playfairDisplay,
							marginBottom: "8px",
						}}
					>
						Phone
					</FormLabel>
					<StyledInputWrapper>
						<PhoneInput
							countries={countries}
							defaultCountry="ua"
							onChange={handleChangePhone}
							value={phone}
						/>
					</StyledInputWrapper>
					{errors.profile?.phoneNumber && (
						<FormHelperText sx={{ marginLeft: 0 }}>
							{errors.profile.phoneNumber.message as string}
						</FormHelperText>
					)}
				</FormControl>
				<FormControl
					component="fieldset"
					error={Boolean(errors.profile?.clothesSize)}
				>
					<FormLabel
						component="legend"
						sx={{
							color: theme.palette.primary.main,
							...theme.typography.playfairDisplay,
							marginBottom: "8px",
						}}
					>
						{t("Form.clothesTitle")}
					</FormLabel>
					{!selectedClothingSize && (
						<InputLabel shrink={false}>{t("Form.selectSize")}</InputLabel>
					)}
					<MuiSelect
						onChange={handleClothingSizeChange}
						value={selectedClothingSize || ""}
					>
						<MenuItem value="">{t("Form.selectSize")}</MenuItem>
						{clothingSizes.map((size) => (
							<MenuItem key={size} value={size}>
								{size}
							</MenuItem>
						))}
					</MuiSelect>
				</FormControl>
				<FormControl
					component="fieldset"
					error={Boolean(errors.profile?.jeansSize)}
				>
					<FormLabel
						component="legend"
						sx={{
							color: theme.palette.primary.main,
							...theme.typography.playfairDisplay,
							marginBottom: "8px",
						}}
					>
						{t("Form.jeansTitle")}
					</FormLabel>
					{!selectedJeansSize && (
						<InputLabel shrink={false}>{t("Form.selectSize")}</InputLabel>
					)}
					<MuiSelect
						onChange={handleJeansSizeChange}
						value={selectedJeansSize || ""}
					>
						<MenuItem value="">{t("Form.selectSize")}</MenuItem>
						{jeansSizes.map((size) => (
							<MenuItem key={size} value={size}>
								{size}
							</MenuItem>
						))}
					</MuiSelect>
				</FormControl>
				<FormControl
					component="fieldset"
					error={Boolean(errors.profile?.shoeSize)}
				>
					<FormLabel
						component="legend"
						sx={{
							color: theme.palette.primary.main,
							...theme.typography.playfairDisplay,
							marginBottom: "8px",
						}}
					>
						{t("Form.shoesTitle")}
					</FormLabel>
					{!selectedShoeSize && (
						<InputLabel shrink={false}>{t("Form.selectSize")}</InputLabel>
					)}
					<MuiSelect
						onChange={handleShoeSizeChange}
						value={selectedShoeSize || ""}
					>
						<MenuItem value="">{t("Form.selectSize")}</MenuItem>
						{shoeSizes.map((size) => (
							<MenuItem key={size} value={size}>
								{size}
							</MenuItem>
						))}
					</MuiSelect>
				</FormControl>
				{serverError && (
					<Typography color="error" variant="body2">
						{serverError}
					</Typography>
				)}
				<BaseButton sx={{ width: "15%" }} type="submit" variant="contained">
					{t("Profile.submitForm")}
				</BaseButton>
			</Box>
			<ProfileAddress
				addressLine={user?.profile.addressLineOne as string}
				city={user?.profile.city as string}
				country={user?.profile.country as string}
				state={user?.profile.state as string}
			/>
			<ProfileCard />
		</Box>
	);
};

export { ProfileForm };
