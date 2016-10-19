import axios from 'axios';
const API_KEY = 'a23d0ab10b0ee8db8941359907f95002';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`
  //request is a promise
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
