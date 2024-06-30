import React from "react";
import { useTranslation } from "react-i18next";

import { Box, Container } from "@mui/material";

import { FooterNav } from "~/components/Footer/Nav.tsx";
import { SocialIcons } from "~/components/Footer/social-icons.tsx";
import {
	FooterBottomContainer,
	FooterContainer,
	SocialIconsContainer,
	StyledDivider,
	StyledFooterCopyrightText,
	StyledFooterText,
	StyledFooterTextContainer,
} from "~/components/Footer/styles.ts";
import { MainLogo } from "~/components/Header/main-logo.tsx";
import { colors } from "~/libs/constants/color.ts";
import { footerColumnsLogIn } from "~/libs/constants/footer-links.ts";
import {
	socialMediaDataLogIn,
	socialMediaDataLogOut,
} from "~/libs/constants/social-media-icons.ts";
import { useAppSelector } from "~/redux/hooks.ts";
import { RootState } from "~/redux/store.ts";

export const Footer: React.FC = () => {
	const { t } = useTranslation();
	const isLoggIned = Boolean(
		useAppSelector((state: RootState) => state.auth.accessToken),
	);

	const footerBgColor = isLoggIned ? colors.GREYRISH_RED : colors.CREME;
	const socialMediaIcons = isLoggIned
		? socialMediaDataLogIn
		: socialMediaDataLogOut;

	return (
		<Box height={381} sx={{ bgcolor: footerBgColor }}>
			<FooterContainer>
				<Container>
					<MainLogo />

					<StyledFooterTextContainer>
						<StyledFooterText>
							{isLoggIned ? (
								<>
									{t("footer.textLogIn.row1")}
									<br />
									{t("footer.textLogIn.row2")}
								</>
							) : (
								<>
									{t("footer.textLogOut.row1")}
									<br />
									{t("footer.textLogOut.row2")}
								</>
							)}
						</StyledFooterText>
					</StyledFooterTextContainer>

					<SocialIconsContainer>
						<SocialIcons socialMediaData={socialMediaIcons} />
					</SocialIconsContainer>
				</Container>

				<Container>
					<FooterNav columns={footerColumnsLogIn} />
				</Container>
			</FooterContainer>

			<FooterBottomContainer>
				<StyledDivider />
				<StyledFooterCopyrightText>
					{t("footer.copyrightText")}
				</StyledFooterCopyrightText>
			</FooterBottomContainer>
		</Box>
	);
};
