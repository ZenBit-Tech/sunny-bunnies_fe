const AppRoute = {
	ADDRESS: "/address",
	ANY: "*",
	CREDIT_CARD: "/credit-card",
	FORGOT_PASSWORD: "/forgot-password",
	GENERAL_INFORMATION: "/general-information",
	HOME: "/home",
	PRIVACY_POLICY: "/privacy-policy",
	ROLE: "/profile-role",
	ROOT: "/",
	SIGN_IN: "/sign-in",
	SIGN_UP: "/sign-up",
	SIZE: "/size",
	SIZE_GUIDE: "/size-guide",
	TERMS_OF_USE: "/terms-of-use",
	VENDOR_PROFILE: "/vendors/:id",
	VENDORS: "/vendors",
	VERIFY_EMAIL: "/verify-email",
} as const;

export { AppRoute };
