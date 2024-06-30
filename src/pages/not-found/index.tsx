import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Link, Typography } from "@mui/material";

import { BaseButton } from "~/components/index.ts";
import {
	AppRoute,
	colors,
	fontSizes,
	fontWeight,
} from "~/libs/constants/index.ts";

import {
	StyledNotFoundContainer,
	StyledNotFoundContentContainer,
	StyledNotFoundContentOptions,
	StyledTypography,
} from "./styles.ts";

const NotFound: React.FC = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const handleNavigate = useCallback(() => {
		navigate(AppRoute.HOME);
	}, [navigate]);

	return (
		<StyledNotFoundContainer>
			<StyledNotFoundContentContainer>
				<Typography mb={2} variant="playfairDisplayTitle">
					{t("NotFoundPage.pageNotFound")}
				</Typography>
				<StyledTypography paragraph variant="dmSans">
					{t("NotFoundPage.weAreSorry")}
				</StyledTypography>
				<StyledNotFoundContentOptions>
					<Typography fontSize={fontSizes.large} paragraph variant="dmSansBold">
						{t("NotFoundPage.hereAreFewOptions")}
					</Typography>
					<Typography paragraph variant="dmSans">
						{t("NotFoundPage.doubleCheckTheUrl")}
					</Typography>
					<Typography paragraph variant="dmSans">
						{t("NotFoundPage.goBackToThePreviousPage")}
					</Typography>
				</StyledNotFoundContentOptions>
				<StyledTypography paragraph variant="dmSans">
					{t("NotFoundPage.ifYouBelieve")}
					<Link
						color={colors.black}
						fontWeight={fontWeight.bold}
						href={t("NotFoundPage.emailLink")}
					>
						{t("NotFoundPage.emailLinkExample")}
					</Link>
					{t("NotFoundPage.weWillHelpYou")}
				</StyledTypography>
				<BaseButton onClick={handleNavigate} variant="primary_black_bold">
					{t("NotFoundPage.goToHome")}
				</BaseButton>
			</StyledNotFoundContentContainer>
		</StyledNotFoundContainer>
	);
};

export { NotFound };
