import { Box, IconButton, SelectChangeEvent, Typography } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { t } from "i18next";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { ArrowLeftIcon } from "~/assets/icons/arrow-left-icon.tsx";
import { DeleteIcon } from "~/assets/icons/delete-icon.tsx";
import { EditIcon } from "~/assets/icons/edit-icon.tsx";
import {
	BaseButton,
	CustomError,
	CustomSelect,
	Loader,
} from "~/components/index.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import { userRole } from "~/libs/constants/user-role.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import { statusSelectItem } from "~/pages/admin-panel/constants/index.ts";
import {
	useDeleteUserMutation,
	useGetUserByIdQuery,
	useUpdateUserStatusMutation,
} from "~/redux/admin/admin-api.ts";
import theme from "~/theme.ts";

import { Modal } from "../modal/index.tsx";
import {
	BoldDivider,
	StyledContainer,
	StyledWrapperContainer,
	StyledWrapperHeader,
} from "../styles.ts";
import {
	StyledLink,
	StyledTitle,
	StyledTitleDmSans,
	StyledUserBox,
} from "./styles.ts";

type Properties = {
	role: string;
};

type FormValues = {
	status: string;
};

const UserProfile: React.FC<Properties> = ({ role }) => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const [serverError, setServerError] = useState("");
	const {
		data: user,
		isError,
		isLoading,
		isSuccess,
		refetch,
	} = useGetUserByIdQuery(id);
	const [updateUserStatus, { isLoading: isStatusLoading }] =
		useUpdateUserStatusMutation();
	const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

	const [isEditing, setIsEditing] = useState(false);
	const [status, setStatus] = useState<string>(user?.status ?? "");
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (id) {
			refetch();
		}
	}, [id, refetch]);

	useEffect(() => {
		if (user) {
			setStatus(user.status);
		}
	}, [user]);

	const handleEditClick = useCallback(() => {
		setIsEditing((prevIsEditing) => !prevIsEditing);
	}, []);

	const handleDeleteClick = useCallback(() => {
		setIsModalOpen(true);
	}, []);

	const handleCloseModal = useCallback(() => {
		setIsModalOpen(false);
	}, []);

	const handleConfirmDelete = useCallback(async () => {
		if (id) {
			try {
				await deleteUser(id).unwrap();
				navigate(`${AppRoute.USER_MANAGEMENT}${"/" + role + "s"}`);
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknownError") };
				setServerError(loadError.message);
			} finally {
				setIsModalOpen(false);
			}
		}
	}, [id, deleteUser, navigate, role]);

	const handleStatusChange = useCallback((event: SelectChangeEvent<string>) => {
		setStatus(event.target.value as string);
	}, []);

	const { handleSubmit } = useAppForm<FormValues>({
		defaultValues: {
			status: user?.status ?? "",
		},
	});

	const handleInputChange = useCallback(async (): Promise<void> => {
		try {
			if (id && status) {
				await updateUserStatus({ id, status }).unwrap();
				setIsEditing(false);
				refetch();
				setServerError("");
			}
		} catch (error) {
			const loadError = (error as FetchBaseQueryError).data
				? ((error as FetchBaseQueryError).data as Error)
				: { message: t("Error.unknownError") };
			setServerError(loadError.message);
		}
	}, [id, refetch, status, updateUserStatus]);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();
			void handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
	);

	return (
		<StyledContainer>
			<Box alignItems="center" display="flex" mb={1}>
				<IconButton
					component={Link}
					to={
						role === userRole.BUYER
							? AppRoute.MANAGEMENT_BUYERS
							: AppRoute.MANAGEMENT_VENDORS
					}
				>
					<ArrowLeftIcon />
				</IconButton>
				<StyledLink
					to={
						role === userRole.BUYER
							? AppRoute.MANAGEMENT_BUYERS
							: AppRoute.MANAGEMENT_VENDORS
					}
				>
					{role === userRole.BUYER
						? t("AdminUserManagementPage.buyers")
						: t("AdminUserManagementPage.vendors")}
				</StyledLink>
			</Box>
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
					<Box display="flex">
						<IconButton onClick={handleEditClick}>
							<EditIcon />
						</IconButton>
						<IconButton disabled={isDeleting} onClick={handleDeleteClick}>
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
									{user.profile.phoneNumber || "-"}
								</StyledTitleDmSans>
							</StyledUserBox>
							<StyledUserBox>
								<StyledTitle>{t("AdminUserManagementPage.status")}</StyledTitle>
								{isEditing ? (
									<CustomSelect
										items={statusSelectItem}
										label={t("AdminUserManagementPage.status")}
										onChange={handleStatusChange}
										value={status}
									/>
								) : (
									<StyledTitleDmSans>{user.status}</StyledTitleDmSans>
								)}
								{serverError && (
									<Typography
										color="error"
										sx={{ marginBottom: "8px" }}
										variant="body2"
									>
										{serverError}
									</Typography>
								)}
							</StyledUserBox>
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
									{user.profile.addressLineOne || "-"}
								</StyledTitleDmSans>
							</StyledUserBox>
						</StyledUserBox>
					</Box>
				)}
				{isEditing && (
					<Box display="flex" gap="10px">
						<BaseButton
							isLoading={isStatusLoading}
							onClick={handleFormSubmit}
							sx={{
								borderRadius: "12px",
							}}
							type="submit"
							variant="contained"
						>
							{t("AdminUserManagementPage.save")}
						</BaseButton>
						<BaseButton
							isLoading={isStatusLoading}
							onClick={handleEditClick}
							sx={{
								padding: "6px 16px",
							}}
							type="submit"
							variant="primary_outlined"
						>
							{t("AdminUserManagementPage.cancel")}
						</BaseButton>
					</Box>
				)}
				{isLoading && <Loader />}
				{isError && (
					<CustomError
						errorMessage={t("AdminUserManagementPage.errorLoadingProfile")}
					/>
				)}
			</StyledWrapperContainer>

			<Modal
				isLoading={isDeleting}
				isModalOpen={isModalOpen}
				onClose={handleCloseModal}
				onConfirmDelete={handleConfirmDelete}
			/>
		</StyledContainer>
	);
};

export { UserProfile };
