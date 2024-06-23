import {
	Box,
	FormControl,
	FormHelperText,
	FormLabel,
	InputLabel,
	MenuItem,
	Select as MuiSelect,
	SelectChangeEvent,
	Typography,
	Button,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import {
	CountryData,
	PhoneInput,
	defaultCountries,
	parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";

import { CustomFormGroup, ImagePreview } from "~/components/index.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { userSignUpValidation } from "~/pages/auth/validation/index.ts";
import {
	clothingSizes,
	jeansSizes,
	shoeSizes,
} from "~/pages/profile-board/constants.ts/size.ts";
import theme from "~/theme.ts";

import { ProfileAddress, ProfileCard } from "../index.ts";
import { StyledInputWrapper, VisuallyHiddenInput } from "./styles.ts";
import { fontSizes } from "~/libs/constants/fonts.ts";

type ProfileFormProps = {};

const ProfileForm: React.FC<ProfileFormProps> = ({}) => {
	const { t } = useTranslation();
	const zero = 0;
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const requiredCodes = ["ua", "ca"];
	const [phone, setPhone] = useState("");
	const [selectedClothingSize, setSelectedClothingSize] = useState<
		null | string
	>("");
	const [selectedShoeSize, setSelectedShoeSize] = useState<null | string>("");
	const [selectedJeansSize, setSelectedJeansSize] = useState<null | string>("");
	const { control, errors, handleSubmit, setValue } = useAppForm({
		defaultValues: {
			clothesSize: "",
			email: "",
			jeansSize: "",
			name: "",
			phoneNumber: "",
			shoeSize: "",
			profilePhoto: null,
		},
		validationSchema: userSignUpValidation,
	});
	const countries = defaultCountries.filter((country: CountryData) => {
		const { iso2 } = parseCountry(country);

		return requiredCodes.includes(iso2);
	});

	const handleChangePhone = useCallback(
		(phone: string) => {
			setPhone(phone);
			setValue("phoneNumber", phone);
		},
		[setValue],
	);

	const handleClothingSizeChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			setSelectedClothingSize(event.target.value);
			setValue("clothesSize", event.target.value);
		},
		[setValue],
	);

	const handleShoeSizeChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			setSelectedShoeSize(event.target.value);
			setValue("shoeSize", event.target.value);
		},
		[setValue],
	);

	const handleJeansSizeChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			setSelectedJeansSize(event.target.value);
			setValue("jeansSize", event.target.value);
		},
		[setValue],
	);

	const handleFileChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSelectedFile(e.target.files ? e.target.files[zero] : null);
		},
		[],
	);

	return (
		<Box
			width="80%"
			sx={{
				padding: "24px",
				display: "flex",
				flexDirection: "column",
				gap: "24px",
			}}
		>
			<Typography variant="playfairDisplayBold" fontSize={fontSizes.large}>
				{t("Profile.generalInformation")}
			</Typography>
			<Box
				autoComplete="off"
				component="form"
				mb={1}
				// onSubmit={handleFormSubmit}
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
						error={Boolean(errors.profilePhoto)}
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
						{errors.profilePhoto && (
							<FormHelperText sx={{ marginLeft: 0 }}>
								{errors.profilePhoto.message as string}
							</FormHelperText>
						)}
					</FormControl>
				</Box>
				<CustomFormGroup
					control={control}
					error={errors.name}
					label={t("Profile.formName")}
					name="name"
					placeholder={t("Profile.enterYourName")}
					type="text"
				/>
				<CustomFormGroup
					control={control}
					error={errors.email}
					label={t("Profile.formEmail")}
					name="email"
					placeholder={t("Profile.emailExample")}
					type="email"
				/>
				<FormControl component="fieldset" error={Boolean(errors.phoneNumber)}>
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
					{errors.phoneNumber && (
						<FormHelperText sx={{ marginLeft: 0 }}>
							{errors.phoneNumber.message as string}
						</FormHelperText>
					)}
				</FormControl>
				<FormControl component="fieldset" error={Boolean(errors.clothesSize)}>
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
				<FormControl component="fieldset" error={Boolean(errors.jeansSize)}>
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
				<FormControl component="fieldset" error={Boolean(errors.jeansSize)}>
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
			</Box>
			<ProfileAddress />
			<ProfileCard />
		</Box>
	);
};

export { ProfileForm };
