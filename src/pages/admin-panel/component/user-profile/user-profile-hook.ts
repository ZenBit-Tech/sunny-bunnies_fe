import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SelectChangeEvent } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { t } from "i18next";

import { AppRoute } from "~/libs/constants/index.ts";
import { useAppForm } from "~/libs/hooks/index.ts";
import {
	NotificationMessage,
	notification,
} from "~/libs/notification/index.ts";
import {
	useDeleteUserMutation,
	useUpdateUserStatusMutation,
} from "~/redux/admin/admin-api.ts";

type Properties = {
	id: string | undefined;
	role: string;
	userStatus: string;
};

type FormValues = {
	status: string;
};

type UseUserProfileFormReturnType = {
	handleCloseModal: () => void;
	handleConfirmDelete: () => void;
	handleDeleteClick: () => void;
	handleEditClick: () => void;
	handleFormSubmit: (event_: React.BaseSyntheticEvent) => void;
	handleStatusChange: (event: SelectChangeEvent<string>) => void;
	isDeleting: boolean;
	isEditing: boolean;
	isModalOpen: boolean;
	isStatusLoading: boolean;
	serverError: string;
	setStatus: React.Dispatch<React.SetStateAction<string>>;
	status: string;
};

const useUserProfileForm = ({
	id,
	role,
	userStatus,
}: Properties): UseUserProfileFormReturnType => {
	const navigate = useNavigate();
	const [serverError, setServerError] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [status, setStatus] = useState<string>(userStatus);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { handleSubmit } = useAppForm<FormValues>({
		defaultValues: {
			status: userStatus,
		},
	});

	const [updateUserStatus, { isLoading: isStatusLoading }] =
		useUpdateUserStatusMutation();
	const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

	const handleInputChange = useCallback(async (): Promise<void> => {
		try {
			if (id && status) {
				await updateUserStatus({ id, status }).unwrap();
				notification.error(NotificationMessage.USER_UPDATE_SUCCESS);
				setIsEditing(false);
				setServerError("");
			}
		} catch (error) {
			notification.error(NotificationMessage.USER_UPDATE_FAILED);
			const loadError = (error as FetchBaseQueryError).data
				? ((error as FetchBaseQueryError).data as Error)
				: { message: t("Error.unknownError") };
			setServerError(loadError.message);
		}
	}, [id, status, updateUserStatus]);

	const handleFormSubmit = useCallback(
		(event_: React.BaseSyntheticEvent): void => {
			event_.preventDefault();
			void handleSubmit(handleInputChange)(event_);
		},
		[handleSubmit, handleInputChange],
	);

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
				notification.error(NotificationMessage.USER_DELETE_SUCCESS);
				navigate(`${AppRoute.USER_MANAGEMENT}/${role}s`);
			} catch (error) {
				const loadError = (error as FetchBaseQueryError).data
					? ((error as FetchBaseQueryError).data as Error)
					: { message: t("Error.unknownError") };
				notification.error(NotificationMessage.USER_DELETE_FAILED);
				setServerError(loadError.message);
			} finally {
				setIsModalOpen(false);
			}
		}
	}, [id, deleteUser, navigate, role]);

	const handleStatusChange = useCallback((event: SelectChangeEvent<string>) => {
		setStatus(event.target.value as string);
	}, []);

	return {
		handleCloseModal,
		handleConfirmDelete,
		handleDeleteClick,
		handleEditClick,
		handleFormSubmit,
		handleStatusChange,
		isDeleting,
		isEditing,
		isModalOpen,
		isStatusLoading,
		serverError,
		setStatus,
		status,
	};
};

export { useUserProfileForm };
