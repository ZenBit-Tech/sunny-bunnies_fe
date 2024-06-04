const authApiPath = {
	GENERATE_ACCESS: "/auth/generate-access",
	GOOGLE: "/auth/google",
	GOOGLE_LOGIN: "/auth/google-login",
	REFRESH_TOKEN: "/auth/refresh-token",
	SIGN_IN: "/auth/sign-in",
	SIGN_UP: "/auth/sign-up",
	USER: "/auth/current",
} as const;

export { authApiPath };
