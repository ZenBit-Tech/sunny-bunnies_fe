import React from "react";
import { useTranslation } from "react-i18next";

import { NavHeaderBox, StyledLink } from "./styles.ts";

type Props = {
	links: { href: string; label: string }[];
};

const NavHeader: React.FC<Props> = ({ links }: Props) => {
	const { t } = useTranslation();

	return (
		<NavHeaderBox>
			{links.map((link, index) => (
				<StyledLink key={index} to={link.href}>
					{t(link.label)}
				</StyledLink>
			))}
		</NavHeaderBox>
	);
};

export { NavHeader };
