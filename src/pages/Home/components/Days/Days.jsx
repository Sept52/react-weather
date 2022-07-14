import React, { useEffect, useState } from 'react';
import Card from './Card';
import s from './Days.module.scss';
import Tabs from './Tabs';
import { storage } from '../../../../model/Storage';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoForFewDays } from '../../../../redux/actions';
import SkeletonThisCards from '../../SkeletonThisCards';

function Days() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState(storage.getItem('gorod'));

  setInterval(() => {
    setCity(storage.getItem('gorod'));

    const input = document.getElementById('input-city');
    if (localStorage.getItem('state') === 'false') {
      input.style.boxShadow = '';
    } else {
      input.style.boxShadow = '0px 0px 18px 7px rgba(251, 0, 0, 0.5)';
    }
  }, 1000);

  const func = (value) => {
    if (value === '3' && success) {
      setData(threeDays);
    } else if (value === '5' && success) {
      setData(fiveDays);
    } else {
      setData([]);
    }
  };

  const { info, fiveDays, threeDays, success, loading } = useSelector(
    (state) => state.getWeatherInfoFewDaysReducer,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoForFewDays());
  }, [city]);

  useEffect(() => {
    setData(info);
  }, [info]);

  return (
    <>
      <Tabs onClick={func} />
      <div className={s.days}>
        {loading
          ? [...new Array(3)].map((_, index) => <SkeletonThisCards key={index} />)
          : data.map((day, index) => <Card key={index} day={day} />)}
      </div>
    </>
  );
}

export default Days;
