export type LanguageOptionType = {
  value: string;
  label: string;
};

export const supportedLanguages: LanguageOptionType[] = [
  { value: "en", label: "English" },
  { value: "es", label: "Español (Spanish)" },
  { value: "fr", label: "Français (French)" },
  { value: "de", label: "Deutsch (German)" },
  { value: "zh", label: "简体中文 (Chinese)" },
  { value: "ja", label: "日本語 (Japanese)" },
  { value: "ko", label: "한국어 (Korean)" },
  { value: "ar", label: "العربية (Arabic)" },
  { value: "pt", label: "Português (Portuguese)" },
  { value: "ru", label: "Русский (Russian)" },
  { value: "it", label: "Italiano (Italian)" },
  { value: "tr", label: "Türkçe (Turkish)" },
  { value: "nl", label: "Nederlands (Dutch)" },
];
