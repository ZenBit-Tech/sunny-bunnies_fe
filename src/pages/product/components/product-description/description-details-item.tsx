import { Box } from "@mui/material";
import React from "react";

import {
	StyledDescriptionData,
	StyledDescriptionSubtitle,
	StyledProductDetails,
} from "./styles.ts";

const numberForCountLastIndex = 1;

type DescriptionDetailsItemProperties = {
	items: string[];
	title: string;
};

const DescriptionDetailsItem: React.FC<DescriptionDetailsItemProperties> = ({
	items,
	title,
}) => {
	return (
		<StyledProductDetails>
			<StyledDescriptionSubtitle>{title}</StyledDescriptionSubtitle>
			<Box display="flex" flexWrap="wrap">
				{items.map((item, index) => (
					<React.Fragment key={index}>
						<StyledDescriptionData>{item}</StyledDescriptionData>
						{index < items.length - numberForCountLastIndex && ", "}
					</React.Fragment>
				))}
			</Box>
		</StyledProductDetails>
	);
};

export { DescriptionDetailsItem };
