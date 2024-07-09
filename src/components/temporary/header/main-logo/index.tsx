import React from "react";
import { useTranslation } from "react-i18next";

import { CircularElement } from "~/components/circular/index.tsx";
import {
	LogoContainer,
	StyledTypography,
} from "~/components/temporary/footer/styles.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import theme from "~/theme.ts";

import { Link } from "../../../link/index.tsx";

const MainLogo: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Link
			sx={{ color: theme.palette.black, textDecoration: "none" }}
			to={AppRoute.HOME}
		>
			<LogoContainer>
				<CircularElement
					backgroundColor={theme.palette.black}
					height="18px"
					width="18px"
				/>
				<StyledTypography>{t("mainLogo.title")}</StyledTypography>
			</LogoContainer>
		</Link>
	);
};

export { MainLogo };
