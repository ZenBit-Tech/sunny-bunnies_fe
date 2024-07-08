import React from "react";

import {
	StyledDescriptionBox,
	TitleTypography,
	DescriptionTypography,
} from "./styles.ts";

type Props = {
	title: string;
	description: string;
};
const FieldDescription: React.FC = (data: Props) => {
	return (
		<StyledDescriptionBox>
			<TitleTypography> {data.title} </TitleTypography>
			<DescriptionTypography> {data.description} </DescriptionTypography>
		</StyledDescriptionBox>
	);
};

export { FieldDescription };
