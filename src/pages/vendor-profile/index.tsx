import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

import { fontSizes } from "~/libs/constants/fonts.ts";
import { useGetByIdQuery } from "~/redux/user/user-api.ts";

import { HeaderLinksGroup } from "./components/index.ts";
import {
	StyledVendorProfileContainer,
	StyledVendorProfileData,
} from "./styles.ts";

const VendorProfile: React.FC = () => {
	const { id } = useParams();
	const { data: vendor } = useGetByIdQuery(id);

	return (
		<StyledVendorProfileContainer>
			<StyledVendorProfileData>
				<HeaderLinksGroup vendorName="VendorName" />
				<Box alignItems="center" display="flex" flexDirection="column" gap={2}>
					<Avatar
						alt={vendor?.name}
						sx={{
							height: 120,
							width: 120,
						}}
					/>
					<Typography fontSize={fontSizes.large} variant="playfairDisplayTitle">
						{vendor?.name}
					</Typography>
				</Box>
			</StyledVendorProfileData>
		</StyledVendorProfileContainer>
	);
};

export { VendorProfile };
