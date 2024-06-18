import { Box, Typography } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { t } from "i18next";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CustomFormGroup } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { type CreditCard } from "~/libs/types/user-profile.type.ts";
import { setUser } from "~/redux/auth/auth-slice.ts";
import { useAppDispatch } from "~/redux/hooks.ts";
import { useUpdateCardMutation } from "~/redux/user/user-api.ts";
import theme from "~/theme.ts";

import { cardNumberChange, expireDateChange } from "../helpers/index.ts";
import { creditCardValidation } from "../validation/index.ts";
import { FormButtons } from "./buttons.tsx";
import { StyledFormContainer } from "./styles.ts";

const CreditCardForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const [serverError, setServerError] = useState("");
	const { control, errors, handleSubmit, setValue } = useAppForm<CreditCard>({
		defaultValues: {
			cardNumber: "",
			cvvCode: "",
			expireDate: "",
		},
		validationSchema: creditCardValidation,
	});
	const [updateCard] = useUpdateCardMutation();
	const navigate = useNavigate();

	const handleInputChange = useCallback(
		async (formData: CreditCard): Promise<void> => {
			try {
				const updatedUser = await updateCard(formData).unwrap();
				dispatch(setUser(updatedUser));
				navigate(AppRoute.SIZE);
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknowError") };
				setServerError(loadError.message);
			}
		},
		[dispatch, navigate, updateCard],
	);

	const handleExpireDateChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			expireDateChange(event, setValue);
		},
		[setValue],
	);

	const handleCardNumberChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			cardNumberChange(event, setValue);
		},
		[setValue],
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
			<Box width="30%">
				<Typography
					color="primary"
					marginBottom="8px"
					sx={{ fontSize: theme.typography.playfairDisplayBold }}
					variant="h6"
				>
					{t("Form.creditCardTitle")}
				</Typography>
				<Typography
					sx={{
						color: theme.palette.fontGray,
						fontSize: theme.typography.dmSans,
					}}
					variant="body1"
				>
					{t("Form.creditCardtext")}
				</Typography>
			</Box>
			<Box
				autoComplete="off"
				component="form"
				display="flex"
				flexDirection="column"
				gap="20px"
				onSubmit={handleFormSubmit}
				width="70%"
			>
				<CustomFormGroup
					control={control}
					error={errors.cardNumber}
					handleChange={handleCardNumberChange}
					label={t("Form.cardNumber")}
					name="cardNumber"
					placeholder={t("Form.cardPlaceholder")}
					sx={{ margin: 0 }}
					type="password"
				/>
				<Box display="flex" gap="20px">
					<CustomFormGroup
						control={control}
						error={errors.expireDate}
						handleChange={handleExpireDateChange}
						label={t("Form.expireDate")}
						name="expireDate"
						placeholder={t("Form.expireDatePlaceholder")}
						sx={{ margin: 0, width: "65%" }}
						type="password"
					/>
					<CustomFormGroup
						control={control}
						error={errors.cvvCode}
						label={t("Form.cvvCode")}
						name="cvvCode"
						placeholder={t("Form.cvvCode")}
						sx={{ margin: 0, width: "35%" }}
						type="password"
					/>
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
					<FormButtons isStart={false} redirectTo={AppRoute.ADDRESS} />
				</Box>
			</Box>
		</StyledFormContainer>
	);
};

export { CreditCardForm };
