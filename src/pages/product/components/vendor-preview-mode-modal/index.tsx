import CloseIcon from "@mui/icons-material/Close";
import { Box, DialogActions, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import VendorPreviewIcon from "~/assets/icons/vendor-preview-icon.svg?react";
import { BaseButton } from "~/components/index.ts";
import { colors, fontSizes } from "~/libs/constants/index.ts";

import {
	StyledCrossIconButton,
	StyledDialogContent,
	StyledVendorPreviewIcon,
	VendorDialog,
} from "./styles.ts";

type VendorPreviewModeModalProperties = {
	isModalOpen: boolean;
	onClose: () => void;
};
const VendorPreviewModeModal: React.FC<VendorPreviewModeModalProperties> = ({
	isModalOpen,
	onClose,
}) => {
	const { t } = useTranslation();

	const handleClose = useCallback((): void => {
		onClose();
	}, [onClose]);

	return (
		<>
			<VendorDialog onClose={handleClose} open={isModalOpen}>
				<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
					<StyledCrossIconButton aria-label="close" onClick={handleClose}>
						<CloseIcon />
					</StyledCrossIconButton>
				</Box>
				<StyledDialogContent>
					<StyledVendorPreviewIcon>
						<VendorPreviewIcon />
					</StyledVendorPreviewIcon>
					<Typography
						sx={{ fontSize: fontSizes.extraLarge, textAlign: "center" }}
						variant="playfairDisplayBold"
					>
						{t("ProductPage.youAreInPreviewMode")}
					</Typography>
					<Typography
						sx={{ color: colors.secondaryTextGray, textAlign: "center" }}
						variant="dmSans"
					>
						{t("ProductPage.onThisPageYouCanSee")}
					</Typography>
				</StyledDialogContent>
				<DialogActions>
					<BaseButton
						fullWidth
						onClick={handleClose}
						sx={{ height: "42px" }}
						variant="primary_black_regular"
					>
						{t("ProductPage.ok")}
					</BaseButton>
				</DialogActions>
			</VendorDialog>
		</>
	);
};

export { VendorPreviewModeModal };
