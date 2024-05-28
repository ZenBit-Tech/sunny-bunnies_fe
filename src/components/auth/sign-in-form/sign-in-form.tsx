import React from "react";
import { useTranslation } from "react-i18next";

const SignInForm: React.FC = () => {
	const { t } = useTranslation();

	return <>{t("SignUpComponent.createYourAccount")}</>;
};

export { SignInForm };
