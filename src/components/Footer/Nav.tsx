import React from "react";
import { useTranslation } from "react-i18next";

import { Box, BoxProps } from "@mui/material";

import { NavBox, NavTitle } from "~/components/Footer/styles.ts";
import { Link } from "~/components/Header/Link.tsx";
import { colors } from "~/libs/constants/color.ts";
import { fontFamily, fontSizes, fontWeights } from "~/libs/constants/font.ts";

type FooterNavColumn = {
	links: { href: string; label: string }[];
	title: string;
};

interface FooterNavProps extends BoxProps {
	columns: FooterNavColumn[];
}

export const FooterNav: React.FC<FooterNavProps> = ({
	columns,
	...props
}: FooterNavProps) => {
	const { t } = useTranslation();

	return (
		<Box
			component="nav"
			sx={{
				display: "flex",
				justifyContent: "space-between",
				...props.sx,
			}}
			{...props}
		>
			{columns.map((column, index) => (
				<Box key={index}>
					<NavTitle>{t(column.title)}</NavTitle>
					<NavBox>
						{column.links.map((link, linkIndex) => (
							<Link
								key={linkIndex}
								sx={{
									"&:hover": {
										color: colors.GREY,
									},
									color: colors.BLACK,
									fontFamily: fontFamily.DM_SANS,
									fontSize: fontSizes.small,
									fontWeight: fontWeights.regular,
									lineHeight: "22px",
									textDecoration: "none",
								}}
								to={link.href}
							>
								{t(link.label)}
							</Link>
						))}
					</NavBox>
				</Box>
			))}
		</Box>
	);
};
