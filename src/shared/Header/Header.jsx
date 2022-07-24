import React, { useState, useEffect, useContext } from 'react';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import { ThemeContext } from '../../context/ThemeContext';
import s from './Header.module.scss';
import { storage } from '../../model/Storage';
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classNames from 'classnames';
import 'babel-polyfill';
function Header() {
  const { theme, changeThemee } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("");

  const [currentCountry, setCurrentCountry] = useState(storage.getItem("gorod") || "Могилёв");

  function changeTheme() {
    changeThemee(theme === "light" ? "dark" : "light");
  }

  const handleChange = (e) => {
    setCurrentCountry(e.target.value);
  };

  useEffect(() => {
    storage.setItem("gorod", currentCountry);
  }, [currentCountry]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={classNames(s.wrapper, s.right)}>
        <input
          id="input-city"
          className={s.find__city}
          type="text"
          onChange={handleChange}
          placeholder={t("header.input_city")}
        />
        <div className={s.theme__and__language}>
          <div className={s.change_theme} onClick={changeTheme}>
            <GlobalSvgSelector id="change-theme" />
          </div>

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{ marginLeft: "20px" }}>
            <InputLabel className={s.language__input} id="demo-select-small">
              {t("header.language")}
            </InputLabel>
            <Select
              className={s.language__select}
              labelId="demo-select-small"
              id="demo-simple-select"
              value={language}
              label={t("header.language")}
              onChange={handleChangeLanguage}>
              <MenuItem onClick={() => changeLanguage("ru")} value={10}>
                Русский
              </MenuItem>
              <MenuItem onClick={() => changeLanguage("en")} value={20}>
                English
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </header>
  );
}

export default Header;
