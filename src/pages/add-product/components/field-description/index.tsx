import React from "react";

import {
	DescriptionTypography,
	StyledDescriptionBox,
	TitleTypography,
} from "./styles.ts";

type Props = {
	description: string;
	title: string;
};

const FieldDescription: React.FC<Props> = ({ description, title }) => {
	return (
		<StyledDescriptionBox>
			<TitleTypography>{title}</TitleTypography>
			<DescriptionTypography>{description}</DescriptionTypography>
		</StyledDescriptionBox>
	);
};

export { FieldDescription };
