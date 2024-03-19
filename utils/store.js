import { create } from "zustand";
import {
  getWeatherData,
  getCities,
  getForecast,
  getAQIForecast,
} from "../api/api";

const useStore = create((set) => ({
  weatherData: null,
  setWeatherData: (weatherData) => set({ weatherData }),
  fetchWeather: async (city, lon, lat) => {
    const weatherData = await getWeatherData(city);
    set({ weatherData });
    const forecast = await getForecast(city);
    const aqiForecast = await getAQIForecast(lon, lat);
    return weatherData;
  },
  searchQuery: "",
  citiesList: null,
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setCitiesList: (citiesList) => set({ citiesList }),
  fetchCities: async (searchQuery) => {
    const citiesList = await getCities(searchQuery);

    set({ citiesList });
  },
}));

export default useStore;
