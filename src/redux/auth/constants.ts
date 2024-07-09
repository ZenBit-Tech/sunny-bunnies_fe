const authApiPath = {
	ADMIN_SIGN_IN: "/auth/admin-sign-in",
	GENERATE_ACCESS: "/auth/generate-access",
	GOOGLE: "/auth/google",
	GOOGLE_LOGIN: "/auth/google-login",
	REFRESH_TOKEN: "/auth/refresh-token",
	RESET_PASSWORD: "/auth/reset-password",
	RESTORE_PASSWORD: "/auth/restore-password",
	SIGN_IN: "/auth/sign-in",
	SIGN_UP: "/auth/sign-up",
	VERIFY_EMAIL: "/auth/verify-email",
	VERIFY_OTP: "/auth/verify-otp",
} as const;

const userApiPath = {
	USER: "/users/current",
} as const;

export { authApiPath, userApiPath };
