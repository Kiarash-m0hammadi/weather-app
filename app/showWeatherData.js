import useWeatherDataFetch from "../utils/getCityData";

export default function ShowWeatherData() {
  const { weatherData } = useWeatherDataFetch();
  if (!weatherData) {
    return null;
  }

  const weatherDataParsed = [
    { label: "Weather condition", value: weatherData?.weather?.[0]?.main },
    { label: "Description", value: weatherData?.weather?.[0]?.description },
    { label: "Temperature", value: weatherData?.main?.temp },
    { label: "Feels like", value: weatherData?.main?.feels_like },
    { label: "Pressure", value: weatherData?.main?.pressure },
    { label: "Humidity", value: `${weatherData?.main?.humidity}%` },
    { label: "Min temperature", value: weatherData?.main?.temp_min },
    { label: "Max temperature", value: weatherData?.main?.temp_max },
    { label: "Visibility", value: `${weatherData?.visibility}m` },
    { label: "Wind speed", value: `${weatherData?.wind?.speed} m/s` },
    { label: "Cloudiness", value: `${weatherData?.clouds?.all}%` },
    { label: "Country", value: weatherData?.sys?.country },
    {
      label: "Sunrise",
      value:
        weatherData?.sys?.sunrise &&
        new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(),
    },
    {
      label: "Sunset",
      value:
        weatherData?.sys?.sunset &&
        new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(),
    },
  ];

  return (
    <div className="p-4 bg-gray-200 dark:bg-slate-800 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
        {weatherData?.name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {weatherDataParsed.map((data, index) => (
          <div key={index} className="flex justify-between">
            <p className="text-gray-600">{data.label}:</p>
            <p className="font-bold text-blue-700">{data.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
