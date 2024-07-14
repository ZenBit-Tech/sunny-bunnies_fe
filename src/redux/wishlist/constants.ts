const wistlistApiPath = {
	ADD: "/wishlist/add",
	ENTIRE_WISHLIST: "/wishlist/entire-wishlist",
	WISHLIST: "/wishlist",
} as const;

const arrayIndex = {
	ONE: 1,
	ZERO: 0,
} as const;

export { arrayIndex, wistlistApiPath };
