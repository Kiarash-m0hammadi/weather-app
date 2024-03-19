import useCitySearchHandlers from '../utils/getCities'
import useWeatherDataFetch from '../utils/getCityData'

export default function SearchBox() {
  const {
    citiesList,
    searchQuery,
    handleSearchInputChange,
    handleSearchSubmit,
  } = useCitySearchHandlers()
  const { fetchWeather } = useWeatherDataFetch()
  return (
    <>
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </form>
      <ul className="mt-4 grid grid-cols-1 gap-2 w-fit">
        {citiesList &&
          citiesList.map((city) => (
            <li
              key={city.name + city.lon}
              className="mb-2 cursor-pointer bg-white hover:bg-gray-100 shadow-sm rounded border border-gray-200 inline-block col-auto"
              onClick={() => fetchWeather(city.name, city.lon, city.lat)}
            >
              <span className="p-2 text-gray-700 hover:text-blue-700">
                {city.name}, {city.state}, {city.country}
              </span>
            </li>
          ))}
      </ul>
    </>
  )
}
