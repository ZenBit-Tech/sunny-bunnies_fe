const adminApiPath = {
	DELETE_PRODUCT: "/admin/product",
	DELETE_USER: "/admin/user",
	GET_BY_OPTIONS: "/admin/users",
	GET_PRODUCTS_BY_OPTIONS: "/admin/products",
	GET_USER: "/admin/user",
	UPDATE_USER_STATUS: "/admin/update-status",
} as const;

export { adminApiPath };
