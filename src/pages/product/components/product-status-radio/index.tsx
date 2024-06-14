import { Box, Radio } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { productStatus } from "~/libs/constants/product-status.ts";

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
				{status === productStatus.BOTH ? (
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "24px",
							width: "100%",
						}}
					>
						<StyledFormControlLabel
							checked={selectedStatus === productStatus.FOR_RENT}
							control={<Radio />}
							label={
								<RadioLabel
									image={image}
									name={name}
									price={price}
									status={productStatus.FOR_RENT}
								/>
							}
							value={productStatus.FOR_RENT}
						/>
						<StyledFormControlLabel
							checked={selectedStatus === productStatus.FOR_SALE}
							control={<Radio />}
							label={
								<RadioLabel
									image={image}
									name={name}
									price={price}
									status={productStatus.FOR_SALE}
								/>
							}
							value={productStatus.FOR_SALE}
						/>
					</Box>
				) : (
					<StyledFormControlLabel
						control={<Radio />}
						label={
							<RadioLabel
								image={image}
								name={name}
								price={price}
								status={
									status === productStatus.FOR_RENT
										? productStatus.FOR_RENT
										: productStatus.FOR_SALE
								}
							/>
						}
						value={status}
					/>
				)}
			</StyledRadioGroup>
		</StyledRadioFormControl>
	);
};

export { ProductStatusRadio };
