import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Typography,
} from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { t } from "i18next";
import React, { useCallback, useState } from "react";
import {
	CountryData,
	PhoneInput,
	defaultCountries,
	parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";
import { useNavigate } from "react-router-dom";

import { UploadIcon } from "~/assets/icons/upload-icon.tsx";
import { ImagePreview } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { GeneralInformation } from "~/libs/types/user-profile.type.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { useUpdateMutation, useUploadMutation } from "~/redux/user/user-api.ts";
import theme from "~/theme.ts";

import { generalInformationValidation } from "../validation/general-information-validation.ts";
import { FormButtons } from "./buttons.tsx";
import { StyledFormContainer, VisuallyHiddenInput } from "./styles.ts";

const GeneralInformationForm: React.FC = () => {
	const user = useAppSelector((state) => state.auth.user);
	const [serverError, setServerError] = useState("");
	const [selectedFile, setSelectedFile] = useState<File | null | string>(
		user?.profile.profilePhoto || null,
	);
	const [phone, setPhone] = useState(user?.profile.phoneNumber ?? "");
	const [update] = useUpdateMutation();
	const [upload] = useUploadMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const zero = 0;
	const requiredCodes = ["ua", "ca"];

	const countries = defaultCountries.filter((country: CountryData) => {
		const { iso2 } = parseCountry(country);

		return requiredCodes.includes(iso2);
	});

	const { errors, handleSubmit, setValue } = useAppForm<GeneralInformation>({
		defaultValues: {
			phoneNumber: user?.profile.phoneNumber ?? "",
			profilePhoto: user?.profile.profilePhoto ?? null,
		},
		validationSchema: generalInformationValidation,
	});

	const handleInputChange = useCallback(
		async (formData: GeneralInformation): Promise<void> => {
			try {
				if (formData.profilePhoto instanceof File) {
					const formDataToSend = new FormData();
					formDataToSend.append("file", formData.profilePhoto);
					await upload(formDataToSend).unwrap();
				}
				const updatedUser = await update({
					phoneNumber: formData.phoneNumber,
				}).unwrap();

				dispatch(setUser(updatedUser));
				navigate(AppRoute.ADDRESS);
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.technicalError") };
				setServerError(loadError.message);
			}
		},
		[dispatch, navigate, update, upload],
	);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();
			handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
	);

	const handleChangePhone = useCallback(
		(phone: string) => {
			setPhone(phone);
			setValue("phoneNumber", phone);
		},
		[setValue],
	);

	const handleFileChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSelectedFile(e.target.files ? e.target.files[zero] : null);
			setValue("profilePhoto", e.target.files ? e.target.files[zero] : null);
		},
		[setValue],
	);

	return (
		<StyledFormContainer>
			<Box
				component="form"
				display="flex"
				flexDirection="column"
				gap="20px"
				onSubmit={handleFormSubmit}
				width="100%"
			>
				<Box alignItems="center" display="flex" width="100%">
					<Box width="30%">
						<Typography
							color="primary"
							marginBottom="8px"
							sx={{ fontSize: theme.typography.playfairDisplayBold }}
						>
							{t("Form.profilePhotoTitle")}
						</Typography>
						<Typography
							sx={{
								color: theme.palette.fontGray,
								fontSize: theme.typography.dmSans,
							}}
							variant="body1"
						>
							{t("Form.profilePhotoText")}
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
							startIcon={<UploadIcon />}
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
							{selectedFile === null
								? t("Form.uploadButtonText")
								: t("Form.changeButtonText")}
							<VisuallyHiddenInput onChange={handleFileChange} type="file" />
						</Button>
						{errors.profilePhoto && (
							<FormHelperText sx={{ marginLeft: 0 }}>
								{errors.profilePhoto.message as string}
							</FormHelperText>
						)}
					</FormControl>
				</Box>
				<Box alignItems="center" display="flex" width="100%">
					<Box width="30%">
						<Typography
							color="primary"
							marginBottom="8px"
							sx={{ fontSize: theme.typography.playfairDisplayBold }}
						>
							{t("Form.phoneNumberTitle")}
						</Typography>
						<Typography
							sx={{
								color: theme.palette.fontGray,
								fontSize: theme.typography.dmSans,
							}}
							variant="body1"
						>
							{t("Form.phoneNumberText")}
						</Typography>
					</Box>
					<FormControl
						component="fieldset"
						error={Boolean(errors.phoneNumber)}
						sx={{ width: "70%" }}
					>
						<PhoneInput
							countries={countries}
							defaultCountry="ua"
							onChange={handleChangePhone}
							value={phone}
						/>
						{errors.phoneNumber && (
							<FormHelperText sx={{ marginLeft: 0 }}>
								{errors.phoneNumber.message as string}
							</FormHelperText>
						)}
					</FormControl>
				</Box>
				{serverError && (
					<Typography color="error" variant="body2">
						{serverError}
					</Typography>
				)}

				<Box
					display="flex"
					gap="10px"
					justifyContent="flex-end"
					marginTop="10%"
				>
					<FormButtons isStart={false} redirectTo={AppRoute.ROLE} />
				</Box>
			</Box>
		</StyledFormContainer>
	);
};

export { GeneralInformationForm };
