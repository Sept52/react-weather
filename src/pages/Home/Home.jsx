import React, { useEffect } from 'react';
import { useState } from 'react';
import { storage } from '../../model/Storage';
import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../../redux/actions';
import SkeletonThisDay from './SkeletonThisDay';
import SkeletonThisDayInfo from './SkeletonThisDayInfo';

function Home() {
  const [city, setCity] = useState(storage.getItem('gorod'));

  setInterval(() => {
    setCity(storage.getItem('gorod'));
  }, 1000);

  const { info, loading } = useSelector((state) => {
    return state.getWeatherInfoReducer;
  });

  const disptach = useDispatch();
  useEffect(() => {
    disptach(getInfo());
  }, [city]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        {loading ? (
          <SkeletonThisDay className={s.skeletonThisDay}/>
        ) : (
          <ThisDay
            className={s.this__day}
            temp={info.main && Math.floor(info.main.temp)}
            icon={info.weather && info.weather[0].icon}
          />
        )}
        {loading ? (
          <SkeletonThisDayInfo className={s.skeletonThisDayInfo}/>
        ) : (
          <ThisDayInfo
            temp={info.main && Math.floor(info.main.temp)}
            feelsLike={info.main && Math.floor(info.main.feels_like)}
            pressure={info.main && info.main.pressure}
            humidity={info.main && info.main.humidity}
            speed={info.wind && Math.floor(info.wind.speed)}
          />
        )}
      </div>

      <Days />
    </div>
  );
}

export default Home;
