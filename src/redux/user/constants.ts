const userApiPath = {
	CHECK_FOLLOW_STATUS: "/users/check-follow-status",
	USER_FOLLOW: "/users/follow",
	USER_UPDATE: "/users/update",
	USER_UPDATE_CARD: "/users/update-card",
	USER_UPDATE_PROFILE: "/users/update-profile",
	USER_UPDATE_USER_AND_PROFILE: "/users/update-user-and-profile",
	USER_UPLOAD_AVATAR: "/users/upload-avatar",
	USERS: "/users",
	VENDOR: "/users/vendor",
} as const;

export { userApiPath };
