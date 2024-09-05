import { create } from 'zustand'
import {
  getWeatherData,
  getCities,
  getForecast,
  getAQIForecast,
} from '../api/api'

const useStore = create((set, get) => ({
  units: 'metric',
  setUnits: (units) => set({ units }),

  weatherData: null,
  setWeatherData: (weatherData) => set({ weatherData }),
  fetchWeather: async (city, lon, lat) => {
    const { units } = get()
    const weatherData = await getWeatherData(city, units)
    const forecast = await getForecast(city, units)
    const aqiForecast = await getAQIForecast(lon, lat)
    set({ weatherData })
  },
  searchQuery: '',
  citiesList: null,
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setCitiesList: (citiesList) => set({ citiesList }),
  fetchCities: async (searchQuery) => {
    const citiesList = await getCities(searchQuery)
    set({ citiesList })
  },
}))

export default useStore
