import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./locales/de.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import ar from "./locales/ar.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import nl from "./locales/nl.json";
import pt from "./locales/pt.json";
import ru from "./locales/ru.json";
import tr from "./locales/tr.json";
import zh from "./locales/zh.json";
import { languages } from "../data";

const resources = {
  // English
  en: { translation: en },
  // German
  de: { translation: de },
  // Spanish
  es: { translation: es },
  // Arabic
  ar: { translation: ar },
  // French
  fr: { translation: fr },
  // Italian
  it: { translation: it },
  // Japanese
  ja: { translation: ja },
  // Korean
  ko: { translation: ko },
  // Dutch
  nl: { translation: nl },
  // Portuguese
  pt: { translation: pt },
  // Russian
  ru: { translation: ru },
  // Turkish
  tr: { translation: tr },
  // Simplified Chinese
  zh: { translation: zh },
};

i18n.use(initReactI18next).init({
  resources,
  lng: JSON.parse(
    localStorage.getItem("locale") || JSON.stringify(languages[0])
  ).value,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
