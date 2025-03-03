import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { languages } from "../data";
import { LanguageOptionType } from "../data/supported-languages";

interface NavProps {
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<NavProps> = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();
  const [selectedLocale, setSelectedLocale] = useState<LanguageOptionType>(() =>
    JSON.parse(localStorage.getItem("locale") || JSON.stringify(languages[0]))
  );

  useEffect(() => {
    localStorage.setItem("locale", JSON.stringify(selectedLocale));
  }, [selectedLocale]);

  const changeLanguage = (language: LanguageOptionType) => {
    setSelectedLocale(language);
    i18n.changeLanguage(language.value);
    document.documentElement.lang = i18n.language ?? "en";
    onLanguageChange(language.value);
  };

  return (
    <div className="language-selector">
      <Select<LanguageOptionType>
        className="options-select"
        classNamePrefix="options-select"
        onChange={(option) => changeLanguage(option as LanguageOptionType)}
        value={selectedLocale}
        options={languages}
      />
    </div>
  );
};

export default LanguageSelector;
