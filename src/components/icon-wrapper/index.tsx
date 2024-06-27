import React from "react";

import { StyledIconWrapper } from "./styles.ts";

type IconWrapperProps = {
	color: string;
	icon: React.ReactNode;
};

const IconWrapper: React.FC<IconWrapperProps> = ({ color, icon }) => {
	return <StyledIconWrapper background={color}>{icon}</StyledIconWrapper>;
};

export { IconWrapper };
