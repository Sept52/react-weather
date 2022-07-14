import React from 'react';
import { useState } from 'react';
import IndicatorSvgSelector from '../../../../assets/icons/indicators/IndicatorSvgSelector';
import s from './Days.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18next';

function Card(Props) {
  const { dt_txt, day_info } = Props.day;
  const [temp] = useState(Props.day.main.temp.toString());

  const { t } = useTranslation();

  const arr = [
    `${t('card.sunday')}`,
    `${t('card.monday')}`,
    `${t('card.tuesday')}`,
    `${t('card.wednesday')}`,
    `${t('card.thursday')}`,
    `${t('card.friday')}`,
    `${t('card.saturday')}`,
  ];

  return (
    <div className={s.card}>
      <div className={s.day}>{arr[new Date(Props.day.dt_txt).getDay()]}</div>
      <div className={s.day__info}></div>
      <div className={s.day__id}>
        <img
          src={`http://openweathermap.org/img/wn/${Props.day.weather[0].icon}@2x.png`}
          alt="weather-icon"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={s.item}>
          <div className={s.indicator}>
            <IndicatorSvgSelector id="temp" />
          </div>
          {Math.round(temp - 273)}°
        </div>
        <div className={s.item}>
          <div className={s.indicator}>
            <IndicatorSvgSelector id="precipitation" />
          </div>
          {Props.day.main.humidity}%
        </div>
        <div className={s.item}>
          <div className={s.indicator}>
            <IndicatorSvgSelector id="wind" />
          </div>
          {Props.day.wind.speed} {t('this_dat_info.speed_value')}
        </div>
      </div>
    </div>
  );
}

export default Card;
