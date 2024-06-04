const authApiPath = {
	GENERATE_ACCESS: "/auth/generate-access",
	GOOGLE: "/auth/google",
	REFRESH_TOKEN: "/auth/refresh-token",
	SIGN_IN: "/auth/sign-in",
	SIGN_UP: "/auth/sign-up",
} as const;

const userApiPath = {
	USER: "/users/current",
} as const;

export { authApiPath, userApiPath };
