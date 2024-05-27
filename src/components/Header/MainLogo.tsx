import React from "react";
import { useTranslation } from "react-i18next";

import { CircularElement } from "~/components/Footer/Circular.tsx";
import { LogoContainer, StyledTypography } from "~/components/Footer/styles.ts";
import { Link } from "~/components/Header/Link.tsx";
import { colors } from "~/libs/constants/color.ts";

export const MainLogo = () => {
	const { t } = useTranslation();
	return (
		<Link sx={{ color: colors.BLACK, textDecoration: "none" }} to="#">
			<LogoContainer>
				<CircularElement backgroundColor="black" height="18px" width="18px" />
				<StyledTypography>{t("mainLogo.title")}</StyledTypography>
			</LogoContainer>
		</Link>
	);
};
