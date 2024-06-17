const authApiPath = {
	GENERATE_ACCESS: "/auth/generate-access",
	GOOGLE: "/auth/google",
	GOOGLE_LOGIN: "/auth/google-login",
	REFRESH_TOKEN: "/auth/refresh-token",
	SIGN_IN: "/auth/sign-in",
	SIGN_UP: "/auth/sign-up",
	VERIFY_EMAIL: "/auth/verify-email",
	VERIFY_OTP: "/auth/verify-otp",
} as const;

const userApiPath = {
	USER: "/users/current",
} as const;

export { authApiPath, userApiPath };
