import React from "react";
import Toggle from "./toggle";
import LanguageSelector from "./languageSelector";
import { useTranslation } from "react-i18next";

interface NavProps {
  theme: string;
  onToggle: () => void;
  onLanguageChange: (language: string) => void;
}

const Nav: React.FC<NavProps> = ({ theme, onToggle,onLanguageChange }) =>{
  const { t } = useTranslation();
  return (
  <nav className="nav">
    <div className="nav__logo">
      <h2 className="content__title  dark-white">
        Git <span>{t("Command")}</span> {t("Explorer")}
      </h2>
    </div>
    <div className="nav__options">
      <div className="language-switcher-container">
        <LanguageSelector onLanguageChange={(language:string) => onLanguageChange(language)} />
      </div>
      <div>
        <Toggle theme={theme} toggleTheme={() => onToggle()} />
      </div>
    </div>
  </nav>
)};

export { Nav };
