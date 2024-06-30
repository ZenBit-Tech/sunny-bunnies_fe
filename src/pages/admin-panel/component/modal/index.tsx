import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import CloseIcon from "@mui/icons-material/Close";
import { Box, DialogActions, Typography } from "@mui/material";

import { BaseButton } from "~/components/index.ts";
import theme from "~/theme.ts";

import { AnimatedButton } from "../animated-button/index.tsx";
import {
	StyledCrossIconButton,
	StyledDialogContent,
	StyledVendorPreviewIcon,
	VendorDialog,
} from "./styles.ts";

type VendorPreviewModeModalProperties = {
	isLoading: boolean;
	isModalOpen: boolean;
	onClose: () => void;
	onConfirmDelete: () => void;
};

const Modal: React.FC<VendorPreviewModeModalProperties> = ({
	isLoading,
	isModalOpen,
	onClose,
	onConfirmDelete,
}) => {
	const { t } = useTranslation();

	const handleConfirmDelete = useCallback(() => {
		onConfirmDelete();
	}, [onConfirmDelete]);

	const handleClose = useCallback(() => {
		onClose();
	}, [onClose]);

	return (
		<VendorDialog onClose={handleClose} open={isModalOpen}>
			<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
				<StyledCrossIconButton aria-label="close" onClick={handleClose}>
					<CloseIcon />
				</StyledCrossIconButton>
			</Box>
			<StyledDialogContent>
				<StyledVendorPreviewIcon>
					<AnimatedButton onConfirmDelete={handleConfirmDelete} />
				</StyledVendorPreviewIcon>
				<Typography
					sx={{ fontSize: theme.fontSizes.extraLarge, textAlign: "center" }}
					variant="playfairDisplayBold"
				>
					{t("AdminUserManagementPage.question")}
				</Typography>
				<Typography
					sx={{ color: theme.palette.secondaryTextGray, textAlign: "center" }}
					variant="dmSans"
				>
					{t("AdminUserManagementPage.attention")}
				</Typography>
			</StyledDialogContent>
			<DialogActions>
				<BaseButton
					fullWidth
					onClick={handleClose}
					sx={{ height: "54px" }}
					variant="primary_outlined"
				>
					{t("AdminUserManagementPage.cancel")}
				</BaseButton>
				<BaseButton
					fullWidth
					isLoading={isLoading}
					onClick={handleConfirmDelete}
					sx={{
						backgroundColor: theme.palette.red,
						fontFamily: theme.typography.dmSans,
						fontSize: theme.fontSizes.small,
						height: "54px",
					}}
					variant="primary_black_regular"
				>
					{t("AdminUserManagementPage.delete")}
				</BaseButton>
			</DialogActions>
		</VendorDialog>
	);
};

export { Modal };
