import {
	Box,
	FormControl,
	FormLabel,
	InputLabel,
	MenuItem,
	Select as MuiSelect,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { t } from "i18next";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { type Size } from "~/libs/types/user-profile.type.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch, useAppSelector } from "~/redux/hooks.ts";
import { useUpdateMutation } from "~/redux/user/user-api.ts";
import theme from "~/theme.ts";

import { clothingSizes, jeansSizes, shoeSizes } from "../constants.ts/size.ts";
import { sizeValidation } from "../validation/index.ts";
import { FormButtons } from "./buttons.tsx";
import { StyledFormContainer } from "./styles.ts";

const SizeForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.auth.user);
	const [selectedClothingSize, setSelectedClothingSize] = useState<
		null | string
	>(user?.profile.clothesSize ?? "");
	const [selectedShoeSize, setSelectedShoeSize] = useState<null | string>(
		user?.profile.jeansSize ?? "",
	);
	const [selectedJeansSize, setSelectedJeansSize] = useState<null | string>(
		user?.profile.shoeSize ?? "",
	);
	const [serverError, setServerError] = useState("");
	const { errors, handleSubmit, setValue } = useAppForm<Size>({
		defaultValues: {
			clothesSize: user?.profile.clothesSize ?? "",
			isRegistrationCompleted: true,
			jeansSize: user?.profile.jeansSize ?? "",
			shoeSize: user?.profile.shoeSize ?? "",
		},
		validationSchema: sizeValidation,
	});
	const [update] = useUpdateMutation();
	const navigate = useNavigate();

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

	const handleInputChange = useCallback(
		async (formData: Size): Promise<void> => {
			try {
				const updatedUser = await update(formData).unwrap();
				dispatch(setUser(updatedUser));
				navigate(AppRoute.HOME);
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);
			}
		},
		[dispatch, navigate, update],
	);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();
			void handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
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
				<Box display="flex" width="100%">
					<Box width="30%">
						<Typography
							color="primary"
							marginBottom="8px"
							sx={{ fontSize: theme.typography.playfairDisplayBold }}
						>
							{t("Form.clothesTitle")}
						</Typography>
						<Typography
							sx={{
								color: theme.palette.fontGray,
								fontSize: theme.typography.dmSans,
							}}
							variant="body1"
						>
							{t("Form.sizeText")}
						</Typography>
					</Box>
					<FormControl
						component="fieldset"
						error={Boolean(errors.clothesSize)}
						sx={{ width: "70%" }}
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
				</Box>
				<Box display="flex" width="100%">
					<Box width="30%">
						<Typography
							color="primary"
							marginBottom="8px"
							sx={{ fontSize: theme.typography.playfairDisplayBold }}
						>
							{t("Form.jeansTitle")}
						</Typography>
						<Typography
							sx={{
								color: theme.palette.fontGray,
								fontSize: theme.typography.dmSans,
							}}
							variant="body1"
						>
							{t("Form.sizeText")}
						</Typography>
					</Box>
					<FormControl
						component="fieldset"
						error={Boolean(errors.shoeSize)}
						sx={{ width: "70%" }}
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
				</Box>
				<Box display="flex" width="100%">
					<Box width="30%">
						<Typography
							color="primary"
							marginBottom="8px"
							sx={{ fontSize: theme.typography.playfairDisplayBold }}
						>
							{t("Form.shoesTitle")}
						</Typography>
						<Typography
							sx={{
								color: theme.palette.fontGray,
								fontSize: theme.typography.dmSans,
							}}
							variant="body1"
						>
							{t("Form.sizeText")}
						</Typography>
					</Box>
					<FormControl
						component="fieldset"
						error={Boolean(errors.jeansSize)}
						sx={{ width: "70%" }}
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
					<FormButtons isStart={false} redirectTo={AppRoute.CREDIT_CARD} />
				</Box>
			</Box>
		</StyledFormContainer>
	);
};

export { SizeForm };
