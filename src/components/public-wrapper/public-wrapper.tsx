import React from "react";

import { Footer } from "../Footer/Footer.tsx";
import { Header } from "../Header/Header.tsx";

type Properties = {
	children: React.ReactNode;
};

const PublicWrapper: React.FC<Properties> = ({ children }: Properties) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export { PublicWrapper };
