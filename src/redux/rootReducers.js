import { combineReducers } from 'redux';
import { getWeatherInfoReducer } from './getWeatherInfoReducer';
import { getWeatherInfoFewDaysReducer } from './getWeatherInfoFewDaysReducer';

export const rootReducers = combineReducers({
  getWeatherInfoReducer,
  getWeatherInfoFewDaysReducer,
});
