import { Box, IconButton, Typography } from "@mui/material";
import { t } from "i18next";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DeleteIcon } from "~/assets/icons/delete-icon.tsx";
import { EditIcon } from "~/assets/icons/edit-icon.tsx";
import { CustomFormGroup } from "~/components/index.ts";
import { userRole } from "~/libs/constants/user-role.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { type UserStatus } from "~/libs/types/user.ts";
import { useGetUserByIdQuery } from "~/redux/admin/admin-api.ts";
import theme from "~/theme.ts";

import {
	BoldDivider,
	StyledContainer,
	StyledTitle,
	StyledTitleDmSans,
	StyledUserBox,
	StyledWrapperContainer,
	StyledWrapperHeader,
} from "./style.ts";

type Properties = {
	role: string;
};

const UserProfile: React.FC<Properties> = ({ role }) => {
	const { id } = useParams<{ id: string }>();
	const {
		data: user,
		isError,
		isLoading,
		isSuccess,
		refetch,
	} = useGetUserByIdQuery(id);

	useEffect(() => {
		if (id) {
			refetch();
		}
	}, [id, refetch]);

	const { control, errors, handleSubmit, setValue } = useAppForm<UserStatus>({
		defaultValues: {
			status: user?.status,
		},
		// validationSchema: addressValidation,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading user profile</div>;
	}

	return (
		<StyledContainer>
			<Typography
				sx={{
					fontFamily: theme.typography.playfairDisplayBold,
					fontSize: theme.fontSizes.medium,
					mb: 2,
				}}
			>
				{role === userRole.BUYER
					? t("AdminUserManagementPage.buyers")
					: t("AdminUserManagementPage.vendors")}
			</Typography>
			<StyledWrapperContainer>
				<StyledWrapperHeader>
					<Box sx={{ alignItems: "center", display: "flex" }}>
						<BoldDivider />
						<Typography
							sx={{ fontFamily: theme.typography.playfairDisplayBold }}
						>
							{role === userRole.BUYER
								? t("AdminUserManagementPage.buyerProfile")
								: t("AdminUserManagementPage.vendorProfile")}
						</Typography>
					</Box>
					<Box>
						<IconButton>
							<EditIcon />
						</IconButton>
						<IconButton>
							<DeleteIcon />
						</IconButton>
					</Box>
				</StyledWrapperHeader>
				{isSuccess && (
					<Box sx={{ display: "flex", gap: "20px", width: "100%" }}>
						<StyledUserBox gap="32px" width="50%">
							<StyledUserBox>
								<StyledTitle>{t("AdminUserManagementPage.name")}</StyledTitle>
								<StyledTitleDmSans>{user.name}</StyledTitleDmSans>
							</StyledUserBox>
							<StyledUserBox>
								<StyledTitle>
									{t("AdminUserManagementPage.phoneNumber")}
								</StyledTitle>
								<StyledTitleDmSans>
									{user.profile.phoneNumber}
								</StyledTitleDmSans>
							</StyledUserBox>
							{/* <CustomFormGroup
								control={control}
								error={errors.addressLineOne}
								label={t("AdminUserManagementPage.adressFirstLine")}
								name="addressLineOne"
								placeholder={t("AdminUserManagementPage.enterYourAddress")}
								sx={{ margin: 0 }}
								type="text"
							/> */}
						</StyledUserBox>
						<StyledUserBox gap="32px" width="50%">
							<StyledUserBox>
								<StyledTitle>{t("AdminUserManagementPage.email")}</StyledTitle>
								<StyledTitleDmSans>{user.email}</StyledTitleDmSans>
							</StyledUserBox>
							<StyledUserBox>
								<StyledTitle>
									{t("AdminUserManagementPage.addressLineOne")}
								</StyledTitle>
								<StyledTitleDmSans>
									{user.profile.addressLineOne}
								</StyledTitleDmSans>
							</StyledUserBox>
						</StyledUserBox>
					</Box>
				)}
			</StyledWrapperContainer>
		</StyledContainer>
	);
};

export { UserProfile };
