import React from "react";
import { useTranslation } from "react-i18next";

import { CircularElement } from "~/components/footer/circular.tsx";
import { LogoContainer, StyledTypography } from "~/components/footer/styles.ts";
import { Link } from "~/components/header/link.tsx";
import { colors } from "~/libs/constants/color.ts";

export const MainLogo: React.FC = () => {
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
