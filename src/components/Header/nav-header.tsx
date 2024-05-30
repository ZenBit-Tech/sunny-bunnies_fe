import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "~/components/Header/Link.tsx";
import { NavHeaderBox } from "~/components/Header/styles.ts";
import { colors } from "~/libs/constants/color.ts";
import { fontFamily, fontSizes, fontWeights } from "~/libs/constants/font.ts";

type Props = {
	links: { href: string; label: string }[];
};

export const NavHeader: React.FC<Props> = ({ links }: Props) => {
	const { t } = useTranslation();
	return (
		<NavHeaderBox>
			{links.map((link, index) => (
				<Link
					key={index}
					sx={{
						"&:hover": {
							color: colors.GREY,
						},
						alignItems: "center",
						color: colors.BLACK,
						display: "flex",
						fontFamily: fontFamily.PlAYFAIR_DISPLAY,
						fontSize: fontSizes.small,
						fontWeight: fontWeights.bold,
						lineHeight: "24px",
						textDecoration: "none",
					}}
					to={link.href}
				>
					{t(link.label)}
				</Link>
			))}
		</NavHeaderBox>
	);
};
