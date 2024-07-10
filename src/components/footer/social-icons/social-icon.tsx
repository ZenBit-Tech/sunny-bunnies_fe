import React from "react";

import { SvgIconProps } from "@mui/material";

import { CircularElement } from "~/components/circular/index.tsx";
import { Link } from "~/components/link/index.tsx";

type SocialIconProps = {
	IconComponent: React.ComponentType<SvgIconProps>;
	backgroundColor: string;
	href: string;
	iconColor: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({
	IconComponent,
	backgroundColor,
	href,
	iconColor,
}: SocialIconProps) => {
	return (
		<Link to={href}>
			<CircularElement
				backgroundColor={backgroundColor}
				height="36px"
				width="36px"
			>
				<IconComponent
					sx={{
						color: iconColor,
						height: "18px",
						width: "18px",
					}}
				/>
			</CircularElement>
		</Link>
	);
};

export { SocialIcon };
