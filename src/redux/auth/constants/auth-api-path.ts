const authApiPath = {
	GENERATE_ACCESS: "/auth/generate-access",
	SIGN_IN: "/auth/sign-in",
	SIGN_UP: "/auth/sign-up",
	USER: "/auth/current",
} as const;

export { authApiPath };
