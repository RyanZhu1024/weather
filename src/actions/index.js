import axios from 'axios'
const API_KEY = '6ef88f9237f5c78d561900544a805d16';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log('request: ',request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
