const productsApiPath = {
	ROOT: "/products",
	UPLOAD_IMAGE: "upload/product-image",
} as const;

const productsLoadLimit = 10;
const productsLoadOffset = 0;

export { productsApiPath, productsLoadLimit, productsLoadOffset };
