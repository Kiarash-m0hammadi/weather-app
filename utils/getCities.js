import useStore from "@/utils/store";

export default function useCitySearchHandlers() {
  const { searchQuery, citiesList, setSearchQuery, fetchCities } = useStore();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchCities(searchQuery);
  };
  return {
    searchQuery,
    handleSearchInputChange,
    citiesList,
    handleSearchSubmit,
  };
}
