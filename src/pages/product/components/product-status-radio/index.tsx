import { Radio } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { RadioLabel } from "../radio-label/index.tsx";
import {
	StyledFormControlLabel,
	StyledRadioFormControl,
	StyledRadioGroup,
} from "./styles.ts";

type ProductStatusRadioProperties = {
	image: string;
	isPreviewMode: boolean;
	name: string;
	price: number;
	status: string;
};

const ProductStatusRadio: React.FC<ProductStatusRadioProperties> = ({
	image,
	isPreviewMode,
	name,
	price,
	status,
}) => {
	const { t } = useTranslation();

	return (
		<StyledRadioFormControl>
			<StyledRadioGroup
				aria-label={t("ProductPage.productStatus")}
				name={t("ProductPage.productStatus")}
				value={status}
			>
				<StyledFormControlLabel
					control={<Radio />}
					label={
						<RadioLabel
							image={image}
							name={name}
							price={price}
							status={status}
						/>
					}
					sx={{ cursor: isPreviewMode ? "none" : "pointer" }}
					value={status}
				/>
			</StyledRadioGroup>
		</StyledRadioFormControl>
	);
};

export { ProductStatusRadio };
