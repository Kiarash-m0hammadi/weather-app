const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

//https://app.ipgeolocation.io/dashboard

async function getCities(query) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching city data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching city data:", error);
    return null;
  }
}

async function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

async function getForecast(city) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching forecast data: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    function groupByDate(data) {
      const groups = {};
      data.list.forEach((item) => {
        const dateString = new Date(item.dt_txt).toLocaleDateString();
        if (!groups[dateString]) {
          groups[dateString] = [];
        }
        groups[dateString].push(item);
      });
      return groups;
    }

    // Example usage
    const groupedByDate = groupByDate(data);

    console.log(groupedByDate);

    return data;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    return null;
  }
}

async function getAQIForecast(lon, lat) {
  const url = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error fetching air quality forecast data: ${response.status}`
      );
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching air quality forecast data:", error);
    return null;
  }
}

export { getCities, getWeatherData, getForecast, getAQIForecast };
