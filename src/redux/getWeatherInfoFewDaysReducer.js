import {
  INFO_WEATHER_FEW_DAYS,
  INFO_WEATHER_FEW_DAYS_ERROR,
  INFO_WEATHER_FEW_DAYS_SUCCESS,
} from './types';

const initialState = {
  info: [],
  success: false,
  loading: false,
  err: false,
};

export const getWeatherInfoFewDaysReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFO_WEATHER_FEW_DAYS:
      return {
        ...state,
        success: false,
        loading: true,
        info: [],
        err: false,
      };
    case INFO_WEATHER_FEW_DAYS_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        info: action.payload.slice(0, 3),
        err: false,
        fiveDays: action.fiveDays,
        threeDays: action.fiveDays.slice(0, 3),
      };

    case INFO_WEATHER_FEW_DAYS_ERROR:
      return {
        ...state,
        err: true,
      };

    default:
      return state;
  }
};
