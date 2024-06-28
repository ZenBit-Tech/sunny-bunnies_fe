const productsApiPath = {
	PRODUCT_DETAILS_CATEGORIES: "/product-detail/categories",
	PRODUCT_DETAILS_STYLES: "/product-detail/styles",
	ROOT: "/products",
	UPLOAD_IMAGE: "upload/product-image",
} as const;

const productsLoadLimit = 10;
const productsLoadOffset = 0;

export { productsApiPath, productsLoadLimit, productsLoadOffset };
