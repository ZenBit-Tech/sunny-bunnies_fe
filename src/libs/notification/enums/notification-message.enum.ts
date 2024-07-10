import { t } from "i18next";

const NotificationMessage = {
	FAILED_UPDATE_PASSWORD: t("Notifications.failedUpdatePassword"),
	RESTORE_LETTER_ERROR: t("Notifications.restoreLetterError"),
	RESTORE_LETTER_SENDED: t("Notifications.restoreLetterSended"),
	SUCCESS_UPDATE_PASSWORD: t("Notifications.successUpdatePassword"),
	UPDATE_PROFILE_FAILED: t("Notifications.updateProfileFailed"),
	UPDATE_PROFILE_SUCCESS: t("Notifications.updateProfileSuccess"),
	USER_DELETE_FAILED: t("Notifications.userDeleteFailed"),
	USER_DELETE_SUCCESS: t("Notifications.userDeleteSuccess"),
	USER_UPDATE_FAILED: t("Notifications.userUpdateFailed"),
	USER_UPDATE_SUCCESS: t("Notifications.userUpdateSuccess"),
	VERIFICATION_SEND_ERROR: t("Notifications.verificationSendError"),
	VERIFICATION_SEND_SUCCESS: t("Notifications.verificationSendSuccess"),
} as const;

export { NotificationMessage };
