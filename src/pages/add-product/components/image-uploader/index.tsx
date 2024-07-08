import React from 'react';

import { Button, Typography } from "@mui/material";
import {useTranslation} from "react-i18next";

import { UploadSimpleIcon } from "~/assets/icons/upload-simple.tsx";
import { Input, UploadContainer } from "./styles.ts";
import {colors} from "~/libs/constants";

interface ImageUploaderProps {
    error: string;
    handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ handleImageUpload, error }) => {
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
                <Typography variant="body2" color="textSecondary">
                    {t("AddVendorProduct.orDropImageToUpload")}
                </Typography>
                {error && (
                    <div style={{ color: colors.red }}>{error}</div>
                )}
            </UploadContainer>

        </>
    );
};

export { ImageUploader };
