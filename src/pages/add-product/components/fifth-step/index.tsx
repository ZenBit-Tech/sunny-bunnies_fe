import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";

import { AppRoute } from "~/libs/constants/app-route.ts";
import { fifthStepValidation } from "~/pages/add-product/components/fifth-step/fifth-step-validation.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";

import { InputField } from "../form-input-field/index.tsx";
import {
	StyledBox,
	StyledFormContainer,
	StyledSpan,
	StyledTypography,
} from "./styles.ts";

type FormData = {
	price: string;
};

type FifthStepDefaultValues = {
	setFifthStepData: (price: string) => void;
};
const FifthStepForm: React.FC<FifthStepDefaultValues> = ({
	setFifthStepData,
}: FifthStepDefaultValues) => {
	const { t } = useTranslation();

	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<FormData>({
		defaultValues: {
			price: "",
		},
		resolver: yupResolver(fifthStepValidation),
	});

	const onSubmit = (data: FormData): void => {
		setFifthStepData(data.price);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<StyledFormContainer>
				<StyledTypography>
					<StyledSpan />
					{t("AddVendorProduct.rentingPrice")}
				</StyledTypography>
				<InputField
					control={control}
					description={t("AddVendorProduct.itsPriceBacedOnCategory")}
					error={errors?.price?.message}
					label={t("AddVendorProduct.recommendedPrice")}
					name="price"
					placeholder={t("AddVendorProduct.pricePlaceholder")}
					title={t("AddVendorProduct.recommendedPrice")}
				/>
			</StyledFormContainer>

			<StyledBox>
				<FormButtons isStart={false} redirectTo={AppRoute.PRODUCT_VARIANTS} />
			</StyledBox>
		</form>
	);
};

export { FifthStepForm };
