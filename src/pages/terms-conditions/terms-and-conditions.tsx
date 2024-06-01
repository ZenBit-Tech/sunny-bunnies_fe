import { Box } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";

import { FIRST_INDEX } from "~/libs/constants/random.ts";

import {
	ArticleContainer,
	PrivacyArticleStyledText,
	PrivacyArticleStyledTitle,
	PrivacyBox,
	PrivacyTitle,
} from "../privacy-policy/styles.ts";
import { articlesTermsConditions } from "./terms-conditions-articles.ts";

export const TermsConditions: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<PrivacyBox>
				<PrivacyTitle>{t("Terms&Conditions.title")}</PrivacyTitle>
			</PrivacyBox>

			<ArticleContainer>
				{articlesTermsConditions.map((article, index) => (
					<Box key={index}>
						<PrivacyArticleStyledTitle
							className={index === FIRST_INDEX ? "centered-title" : ""}
						>
							{t(article.title)}
						</PrivacyArticleStyledTitle>
						<PrivacyArticleStyledText>
							{t(article.text)}
						</PrivacyArticleStyledText>
					</Box>
				))}
			</ArticleContainer>
		</>
	);
};
