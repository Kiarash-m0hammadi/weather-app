import useStore from "@/utils/store";

export default function useWeatherDataFetch() {
  const { weatherData, fetchWeather } = useStore();

  return {
    weatherData,
    fetchWeather,
  };
}
