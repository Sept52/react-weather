import React from 'react';
import { useState } from 'react';
import s from './ThisDay.module.scss';
import { storage } from '../../../../model/Storage';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18next';

function ThisDay({ temp, icon }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [city, setCity] = useState(storage.getItem("gorod"));

  const { t } = useTranslation();

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
    setCity(storage.getItem("gorod"));
  }, 1000);

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{temp && ` ${temp}°`}</div>
          <div className={s.this__day_name}>{t("this_day.today")}</div>
        </div>
        <img
          src={icon !== "" ? `http://openweathermap.org/img/wn/${icon}@2x.png` : ""}
          alt="weather-icon"
        />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          {t("this_day.time")}: <span>{time}</span>
        </div>
        <div className={s.this__city}>
          {t("this_day.city")}: <span>{city}</span>
        </div>
      </div>
    </div>
  );
}

export default ThisDay;
