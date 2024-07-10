import React from "react";

import { StyledProductStatus } from "./styles.ts";

type ProductStatusProps = {
	status: "active" | "inactive" | "rejected";
};

const ProductStatus: React.FC<ProductStatusProps> = ({ status }) => {
	return <StyledProductStatus status={status}>{status}</StyledProductStatus>;
};

export { ProductStatus };
