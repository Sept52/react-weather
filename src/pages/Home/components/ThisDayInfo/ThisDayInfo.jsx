import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/img/cloud.png';
import ThisDayItem from './ThisDayItem';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18next';

function ThisDayInfo({ temp, feelsLike, pressure, humidity, speed, info, err }) {
  const { t } = useTranslation();

  const items = [
    {
      icon_id: 'temp',
      name: `${t('this_dat_info.temp')}`,
      value: `${temp}° - ${t('this_dat_info.temp_value')} ${feelsLike}°`,
    },
    {
      icon_id: 'pressure',
      name: `${t('this_dat_info.pressure')}`,
      value: `${pressure} ${t('this_dat_info.pressure_value')} `,
    },
    {
      icon_id: 'precipitation',
      name: `${t('this_dat_info.humidity')}`,
      value: `${humidity}%`,
    },
    {
      icon_id: 'wind',
      name: `${t('this_dat_info.speed')}`,
      value: `${speed} ${t('this_dat_info.speed_value')}`,
    },
  ];
  return (
    <div className={s.this__day_info}>
      <img className={s.cloud__img} src={cloud} alt="облако" />
      <div className={s.this__day_info_items}>
        {items.map((item) => {
          return <ThisDayItem key={item.icon_id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default ThisDayInfo;
