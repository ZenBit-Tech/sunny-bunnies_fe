import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { colors, fontSizes, fontWeight } from "~/libs/constants/index.ts";

import {
	StyledEmailTextField,
	StyledNewsletterContainer,
	StyledNewsletterContentContainer,
	StyledNewsletterForm,
	StyledNewsletterHeader,
	StyledSignUpButton,
} from "./styles.ts";

const Newsletter: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Box sx={{ height: "438px", padding: "52px", width: "100%" }}>
			<StyledNewsletterContainer>
				<StyledNewsletterContentContainer>
					<StyledNewsletterHeader>
						<Typography
							color={colors.textBlack}
							fontSize={fontSizes.title}
							fontWeight={fontWeight.bold}
							variant="playfairDisplayTitle"
						>
							{t("HomePage.joinOurNewsletter")}
						</Typography>
						<Typography
							fontSize={fontSizes.mediumLarge}
							fontWeight={fontWeight.regular}
							variant="dmSans"
						>
							{t("HomePage.bigDiscountAndRight")}
						</Typography>
					</StyledNewsletterHeader>
					<StyledNewsletterForm>
						<MailOutlineIcon fontSize="small" />
						<StyledEmailTextField placeholder={t("HomePage.emailAddress")} />
						<StyledSignUpButton>{t("HomePage.signUp")}</StyledSignUpButton>
					</StyledNewsletterForm>
				</StyledNewsletterContentContainer>
			</StyledNewsletterContainer>
		</Box>
	);
};

export { Newsletter };
