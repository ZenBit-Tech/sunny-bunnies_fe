import React from "react";

import { HeaderLinksGroup } from "./components/index.ts";
import {
	StyledVendorProfileContainer,
	StyledVendorProfileData,
} from "./styles.ts";

const VendorProfile: React.FC = () => {
	return (
		<StyledVendorProfileContainer>
			<StyledVendorProfileData>
				<HeaderLinksGroup vendorName="VendorName" />
			</StyledVendorProfileData>
		</StyledVendorProfileContainer>
	);
};

export { VendorProfile };
