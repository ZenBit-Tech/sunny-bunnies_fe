import React from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@mui/material";

import { UploadSimpleIcon } from "~/assets/icons/upload-simple.tsx";

import {
	DescriptionTypography,
	ErrorSpan,
	Input,
	UploadContainer,
} from "./styles.ts";

type ImageUploaderProps = {
	error: string | undefined;
	handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({
	error,
	handleImageUpload,
}) => {
	const { t } = useTranslation();

	return (
		<>
			<UploadContainer>
				<label htmlFor="image-upload">
					<UploadSimpleIcon />
					<Input
						accept=".png, .jpg, .jpeg"
						id="image-upload"
						multiple
						onChange={handleImageUpload}
						type="file"
					/>
					<Button component="span" variant="contained">
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
