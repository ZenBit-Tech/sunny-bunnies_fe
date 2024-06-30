import React from "react";

import { SvgIconProps } from "@mui/material";

import { SocialIcon } from "~/components/Footer/social-icon.tsx";
import { SocialIconsBox } from "~/components/Footer/styles.ts";

type SocialMediaData = {
	IconComponent: React.ComponentType<SvgIconProps>;
	backgroundColor: string;
	href: string;
	iconColor: string;
};

type SocialIconsProps = {
	socialMediaData: SocialMediaData[];
};

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
