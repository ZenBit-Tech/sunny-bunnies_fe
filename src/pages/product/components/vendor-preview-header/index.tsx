import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box } from "@mui/material";

import { BaseButton } from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";

import { StyledIconButton, StyledVendorPreviewHeader } from "./styles.ts";

const VendorPreviewHeader: React.FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleReturnBack = useCallback((): void => {
		navigate(AppRoute.PRODUCT_LIST);
	}, [navigate]);

	return (
		<StyledVendorPreviewHeader>
			<BaseButton
				onClick={handleReturnBack}
				startIcon={<KeyboardBackspaceIcon />}
				variant="text"
			>
				{t("ProductPage.toProductList")}
			</BaseButton>
			<Box display="flex" gap="10px">
				<StyledIconButton>
					<DriveFileRenameOutlineIcon />
				</StyledIconButton>
				<StyledIconButton>
					<DeleteOutlineIcon />
				</StyledIconButton>
			</Box>
		</StyledVendorPreviewHeader>
	);
};

export { VendorPreviewHeader };
