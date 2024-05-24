import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import translationEnglish from "~/libs/locales/translation.json";

const resources = {
	en: {
		translation: translationEnglish,
	},
};

i18next.use(initReactI18next).use(Backend).use(LanguageDetector).init({
	lng: "en",
	resources,
});

export default i18next;
