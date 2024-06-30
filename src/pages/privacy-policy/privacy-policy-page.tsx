import React from "react";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/system";

import { FIRST_INDEX } from "~/libs/constants/random.ts";

import { articles } from "./privacy-policy-articles.ts";
import {
	ArticleContainer,
	PrivacyArticleStyledText,
	PrivacyArticleStyledTitle,
	PrivacyBox,
	PrivacyTitle,
} from "./styles.ts";

export const PrivacyPolicy: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<PrivacyBox>
				<PrivacyTitle>{t("PrivacyPolicy.title")}</PrivacyTitle>
			</PrivacyBox>

			<ArticleContainer>
				{articles.map((article, index) => (
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
