const AppRoute = {
	ADDRESS: "/address",
	ADMIN_PANEL: "/admin-panel",
	ADMIN_SIGN_IN: "/admin-sign-in",
	ANY: "*",
	CREDIT_CARD: "/credit-card",
	FORGOT_PASSWORD: "/forgot-password",
	GENERAL_INFORMATION: "/general-information",
	HOME: "/home",
	PRIVACY_POLICY: "/privacy-policy",
	PRODUCT: "/product/:id",
	PRODUCT_LIST: "/product-list",
	ROLE: "/profile-role",
	ROOT: "/",
	SIGN_IN: "/sign-in",
	SIGN_UP: "/sign-up",
	SIZE: "/size",
	SIZE_GUIDE: "/size-guide",
	TERMS_OF_USE: "/terms-of-use",
	VERIFY_EMAIL: "/verify-email",
} as const;

export { AppRoute };
