const AppRoute = {
	ADDRESS: "/address",
	ADMIN_CHAT: "/admin-chat",
	ADMIN_SIGN_IN: "/admin-sign-in",
	ANY: "*",
	CREDIT_CARD: "/credit-card",
	FORGOT_PASSWORD: "/forgot-password",
	GENERAL_INFORMATION: "/general-information",
	HOME: "/home",
	PRIVACY_POLICY: "/privacy-policy",
	PRODUCT: "/product/:id",
	PRODUCT_LIST: "/product-list",
	PRODUCT_MANAGEMENT: "/product-management",
	PROFILE: "/profile",
	PROFILE_ORDERS: "/profile/orders",
	PROFILE_SETTINGS: "/profile/settings",
	PROFILE_SUPPORT: "/profile/support",
	PROFILE_WISHLIST: "/profile/wishlist",
	ROLE: "/profile-role",
	ROOT: "/",
	SIGN_IN: "/sign-in",
	SIGN_UP: "/sign-up",
	SIZE: "/size",
	SIZE_GUIDE: "/size-guide",
	TERMS_OF_USE: "/terms-of-use",
	USER_MANAGEMENT: "/user-management",
	VENDORS: "/vendors",
	VENDORS_PROFILE: "/vendors/:id",
	VERIFY_EMAIL: "/verify-email",
} as const;

export { AppRoute };
