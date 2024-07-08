import React from "react";

import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import { UploadSimpleIcon } from "~/assets/icons/upload-simple.tsx";
import {
	Input,
	UploadContainer,
	ErrorSpan,
	DescriptionTypography,
} from "./styles.ts";

type ImageUploaderProps = {
	error: string;
	handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({
	handleImageUpload,
	error,
}) => {
	const { t } = useTranslation();

	return (
		<>
			<UploadContainer>
				<label htmlFor="image-upload">
					<UploadSimpleIcon />
					<Input
						id="image-upload"
						type="file"
						accept=".png, .jpg, .jpeg"
						onChange={handleImageUpload}
						multiple
					/>
					<Button variant="contained" component="span">
						{t("AddVendorProduct.addImage")}
					</Button>
				</label>
				<DescriptionTypography>
					{t("AddVendorProduct.orDropImageToUpload")}
				</DescriptionTypography>
				{error && <ErrorSpan>{error}</ErrorSpan>}
			</UploadContainer>
		</>
	);
};

export { ImageUploader };
