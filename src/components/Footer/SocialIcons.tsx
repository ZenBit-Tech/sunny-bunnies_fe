import { SvgIconProps } from "@mui/material";
import React from "react";

import { SocialIcon } from "~/components/Footer/SocialIcon.tsx";
import { SocialIconsBox } from "~/components/Footer/styles.ts";

interface SocialMediaData {
	IconComponent: React.ComponentType<SvgIconProps>;
	backgroundColor: string;
	href: string;
	iconColor: string;
}

interface SocialIconsProps {
	socialMediaData: SocialMediaData[];
}

export const SocialIcons: React.FC<SocialIconsProps> = ({
	socialMediaData,
}: SocialIconsProps) => {
	return (
		<SocialIconsBox>
			{socialMediaData.map((socialMedia, index) => (
				<SocialIcon
					IconComponent={socialMedia.IconComponent}
					backgroundColor={socialMedia.backgroundColor}
					href={socialMedia.href}
					iconColor={socialMedia.iconColor}
					key={index}
				/>
			))}
		</SocialIconsBox>
	);
};
