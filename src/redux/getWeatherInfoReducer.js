import { INFO_WEATHER, INFO_WEATHER_ERROR, INFO_WEATHER_SUCCESS } from './types';

const initialState = {
  info: [],
  success: false,
  loading: false,
  err: false,
};

export const getWeatherInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFO_WEATHER:
      return {
        ...state,
        success: false,
        loading: true,
        info: [],
        err: false,
      };
    case INFO_WEATHER_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        info: action.payload,
        err: false,
      };

    case INFO_WEATHER_ERROR:
      return {
        ...state,
        err: true,
      };

    default:
      return state;
  }
};
