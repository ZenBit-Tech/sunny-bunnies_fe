import React from "react";
import { StyledDescriptionBox, TitleTypography, DescriptionTypography } from "./styles.ts";

type Props = {
	title: string;
	description: string;
};

const FieldDescription: React.FC<Props> = ({ title, description }) => {
	return (
		<StyledDescriptionBox>
			<TitleTypography>{title}</TitleTypography>
			<DescriptionTypography>{description}</DescriptionTypography>
		</StyledDescriptionBox>
	);
};

export { FieldDescription };
