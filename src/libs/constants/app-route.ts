const AppRoute = {
	ANY: "*",
	FORGOT_PASSWORD: "/forgot-password",
	HOME: "/home",
	PRIVACY_POLICY: "/privacy-policy",
	ROOT: "/",
	SIGN_IN: "/sign-in",
	SIGN_UP: "/sign-up",
	SIZE_GUIDE: "/size-guide",
	TERMS_OF_USE: "/terms-of-use",
	VERIFY_EMAIL: "/verify-email",
} as const;

export { AppRoute };
