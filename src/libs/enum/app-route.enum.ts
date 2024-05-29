const AppRoute = {
	ANY: "*",
	FORGOT_PASSWORD: "/forgot-password",
	HOME: "/home",
	ONBOARDING: "/onboarding",
	PRIVACY_POLICY: "/privacy-policy",
	ROOT: "/",
	SIGN_IN: "/sign-in",
	SIGN_UP: "/sign-up",
	TERMS_OF_USE: "/terms-of-use",
	VERIFY_EMAIL: "/verify-email",
} as const;

export { AppRoute };
