import { useState, useEffect, useCallback } from "react";
import { Footer, Nav } from "./components";
import Typist from "react-typist";
import { isMobile } from "react-device-detect";
import { optionsFirst, optionsSecond, optionsThird } from "./data";
import Select from "react-select";
import clipboard from "./assets/images/clipboard.svg";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { copyToClipboard } from "./utilities";
import { OptionType } from "./data/secondary-options";

const avgTypingDelay: number = 0;

const App = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "dark"
  );

  const [firstOption, setFirstOption] = useState<OptionType | null>(null);
  const [showSecond, setShowSecond] = useState(false);
  const [secondOption, setSecondOption] = useState<OptionType | null>(null);
  const [showThird, setShowThird] = useState(false);
  const [thirdOption, setThirdOption] = useState<OptionType | null>(null);
  const [nb, setNb] = useState("");
  const [usage, setUsage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  let localizedOptionsFirst = optionsFirst();
  let localizedOptionsSecond = optionsSecond();
  let localizedOptionsThird = optionsThird();

  const handleToggle = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  const onFirstChange = (selectedOption: OptionType | null) => {
    if (!selectedOption) return;

    setFirstOption(selectedOption);
    setShowSecond(true);

    if (localizedOptionsSecond[selectedOption.value].length === 1) {
      onSecondChange(localizedOptionsSecond[selectedOption.value][0]);
    } else {
      setSecondOption(null);
      setShowThird(false);
      setThirdOption(null);
      setNb("");
      setUsage("");
    }
  };

  const onSecondChange = (selectedOption: OptionType | null) => {
    if (!selectedOption) return;

    setSecondOption(selectedOption);
    if (selectedOption.usage) {
      setShowThird(false);
      setThirdOption(null);
      setNb(selectedOption.nb || "");
      setUsage(selectedOption.usage || "");
    } else if (localizedOptionsThird[selectedOption.value].length === 1) {
      setShowThird(true);
      onThirdChange(localizedOptionsThird[selectedOption.value][0]);
    } else {
      setShowThird(true);
      setThirdOption(null);
      setNb("");
      setUsage("");
    }
  };

  const onThirdChange = (selectedOption: OptionType | null) => {
    if (!selectedOption) return;

    setThirdOption(selectedOption);
    setNb(selectedOption.nb || "");
    setUsage(selectedOption.usage || "");
  };

  const copyUsage = useCallback(() => {
    if (!usage) return;

    copyToClipboard(usage);

    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }, [usage]);

  const onLanguageChange = () => {
    localizedOptionsFirst = optionsFirst();
    localizedOptionsSecond = optionsSecond();
    localizedOptionsThird = optionsThird();

    onFirstChange(
      localizedOptionsFirst.find(({ value }) => value === firstOption?.value) ||
        null
    );
    onSecondChange(
      localizedOptionsSecond[firstOption?.value || ""]?.find(
        ({ value }) => value === secondOption?.value
      ) || null
    );
    onThirdChange(
      localizedOptionsThird[secondOption?.value || ""]?.find(
        ({ value }) => value === thirdOption?.value
      ) || null
    );
  };

  return (
    <div
      className={classnames("home", {
        dark: theme === "dark",
        light: theme === "light",
      })}
    >
      <div className="container home__container">
        <Nav
          theme={theme}
          onToggle={handleToggle}
          onLanguageChange={onLanguageChange}
        />
        <div className="content">
          <div className="row">
            <div className="col-5">
              <p className="content__subtitle dark-grey">
                {t("content.subtitle")}
              </p>

              <div className="options">
                <h4 className="options__title">{t("options.title")}</h4>

                <Select<OptionType>
                  placeholder="..."
                  className="options-select"
                  classNamePrefix="options-select"
                  isSearchable={true}
                  onChange={onFirstChange}
                  value={firstOption}
                  options={localizedOptionsFirst}
                />

                {showSecond && (
                  <Select<OptionType>
                    placeholder="..."
                    className="options-select"
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={onSecondChange}
                    value={secondOption}
                    options={localizedOptionsSecond[firstOption?.value || ""]}
                  />
                )}

                {showThird && (
                  <Select<OptionType>
                    placeholder="..."
                    className="options-select"
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={onThirdChange}
                    value={thirdOption}
                    options={localizedOptionsThird[secondOption?.value || ""]}
                  />
                )}
              </div>
            </div>
            <div className="col-7 boards">
              <div
                className={`board__group board__group--1 ${
                  isMobile && !usage ? " d-none" : ""
                }`}
              >
                <h2 className="board__title  dark-white">{t("Usage")}</h2>
                <div className="board board--1">
                  <pre>
                    {usage ? (
                      <Typist
                        key={usage}
                        avgTypingDelay={avgTypingDelay}
                        cursor={{ show: false }}
                      >
                        {usage}
                      </Typist>
                    ) : (
                      <div />
                    )}
                  </pre>
                  {usage && (
                    <div className="copy">
                      <span className={`copy__popover ${copied ? "show" : ""}`}>
                        {t("command copied")}
                      </span>
                      <img
                        className="copy__image"
                        onClick={copyUsage}
                        src={clipboard}
                        alt="Clipboard"
                      />
                    </div>
                  )}
                </div>

                {nb && (
                  <div className="board__group board__group--2">
                    <h2 className="board__title  dark-white">{t("Note")}</h2>
                    <div className="board board--2">
                      <pre>
                        <Typist
                          key={nb}
                          avgTypingDelay={avgTypingDelay}
                          cursor={{ show: false }}
                        >
                          {nb}
                        </Typist>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default App;
