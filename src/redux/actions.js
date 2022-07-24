import axios from 'axios';
import {
  INFO_WEATHER,
  INFO_WEATHER_ERROR,
  INFO_WEATHER_SUCCESS,
  INFO_WEATHER_FEW_DAYS,
  INFO_WEATHER_FEW_DAYS_ERROR,
  INFO_WEATHER_FEW_DAYS_SUCCESS,
} from './types';
import { storage } from '../model/Storage';

export const getInfo = () => {
  return async (dispatch) => {
    dispatch({ type: INFO_WEATHER });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${storage.getItem(
          "gorod",
        )}&lang=ru&units=metric&appid=e688d27a66d1e2055217d3bd32dc027b`,
      )
      .then((res) => {
        localStorage.setItem("state", "false");
        dispatch({
          type: INFO_WEATHER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        localStorage.setItem("state", "true");
        dispatch({
          type: INFO_WEATHER_ERROR,
          payload: err,
        });
      });
  };
};

export const getInfoForFewDays = () => {
  return async (dispatch) => {
    dispatch({ type: INFO_WEATHER_FEW_DAYS });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${storage.getItem(
          "gorod",
        )}&APPID=e688d27a66d1e2055217d3bd32dc027b`,
      )
      .then((res) => {
        dispatch({
          type: INFO_WEATHER_FEW_DAYS_SUCCESS,
          payload: res.data.list.filter((reading) => reading.dt_txt.includes("18:00:00")),
          fiveDays: res.data.list.filter((reading) => reading.dt_txt.includes("18:00:00")),
        });
      })
      .catch((err) => {
        dispatch({
          type: INFO_WEATHER_FEW_DAYS_ERROR,
          payload: err,
          fiveDays: err,
        });
      });
  };
};
