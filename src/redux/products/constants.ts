const productsApiPath = {
	PRODUCT_DETAILS_BRANDS: "/product-details/brands",
	PRODUCT_DETAILS_CATEGORIES: "/product-details/categories",
	PRODUCT_DETAILS_COLORS: "/product-details/colors",
	PRODUCT_DETAILS_MATERIAL: "/product-details/materials",
	PRODUCT_DETAILS_SIZES: "/product-details/sizes",
	PRODUCT_DETAILS_STYLES: "/product-details/styles",
	ROOT: "/products",
	UPLOAD_IMAGE: "upload/product-image",
} as const;

const productsLoadLimit = 10;
const productsLoadOffset = 0;

export { productsApiPath, productsLoadLimit, productsLoadOffset };
