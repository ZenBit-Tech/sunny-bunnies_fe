import { Radio } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { RadioLabel } from "../radio-label/index.tsx";
import {
	StyledFormControlLabel,
	StyledRadioFormControl,
	StyledRadioGroup,
} from "./styles.ts";

type ProductStatusRadioProperties = {
	defaultSelectedStatus: string;
	image: string;
	name: string;
	onSelectStatus: (status: string) => void;
	price: number;
	status: string;
};

const ProductStatusRadio: React.FC<ProductStatusRadioProperties> = ({
	defaultSelectedStatus,
	image,
	name,
	onSelectStatus,
	price,
	status,
}) => {
	const { t } = useTranslation();

	const [selectedStatus, setSelectedStatus] = useState(defaultSelectedStatus);

	const handleProductChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const status = (event.target as HTMLInputElement).value;
			setSelectedStatus(status);
			onSelectStatus(status);
		},
		[onSelectStatus],
	);

	return (
		<StyledRadioFormControl>
			<StyledRadioGroup
				aria-label={t("ProductPage.productStatus")}
				name={t("ProductPage.productStatus")}
				onChange={handleProductChange}
				value={selectedStatus}
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
					value={status}
				/>
			</StyledRadioGroup>
		</StyledRadioFormControl>
	);
};

export { ProductStatusRadio };
