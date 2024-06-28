import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import CloseIcon from "@mui/icons-material/Close";
import {
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
} from "@mui/material";

import { BaseButton } from "~/components/index.ts";
import { fontSizes } from "~/libs/constants/index.ts";

import { StyledCrossIconButton, VendorDialog } from "./styles.ts";

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
				<DialogTitle sx={{ m: 1, p: 2 }} variant="playfairDisplayBold">
					{t("ProductPage.payAttention")}
				</DialogTitle>
				<StyledCrossIconButton aria-label="close" onClick={handleClose}>
					<CloseIcon />
				</StyledCrossIconButton>
				<DialogContent sx={{ m: 1, p: 3 }}>
					<Typography
						sx={{ fontSize: fontSizes.mediumLarge, lineHeight: "30px" }}
						variant="dmSans"
					>
						{t("ProductPage.vendorMessage")}
					</Typography>
				</DialogContent>
				<DialogActions>
					<BaseButton onClick={handleClose} variant="text">
						{t("ProductPage.ok")}
					</BaseButton>
				</DialogActions>
			</VendorDialog>
		</>
	);
};

export { VendorPreviewModeModal };
