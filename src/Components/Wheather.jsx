import React, {useState} from 'react'

const Wheather = () => {
    const mockWeatherData = {
        'New York': { 
          temperature: '22°C', 
          humidity: '56%', 
          windSpeed: '15 km/h'
        },
        'Los Angeles': {
          temperature: '27°C',
          humidity: '45%',
          windSpeed: '10 km/h',
        },
        'London': { 
          temperature: '15°C', 
          humidity: '70%', 
          windSpeed: '20 km/h' 
        },
      };
    
      const [citySearch, setCitySearch] = useState('');
      const [weather, setWeather] = useState(null);
      const [error, setError] = useState(null);
      const [searchHistory, setSearchHistory] = useState([]);
    
      const handleSearch = () => {
        const cityName = citySearch.trim();
    
        if (mockWeatherData.hasOwnProperty(cityName)) {
          setWeather(mockWeatherData[cityName]);
          setError(null);
    
          // Update search history
          setSearchHistory((prevHistory) => [...prevHistory, cityName]);
        } else {
          setWeather(null);
          setError('City not found.');
        }
      };
    
      const handleCityClick = (city) => {
        setCitySearch(city);
        handleSearch();
      };
    
      return (
        <div>
          <input
            type="text"
            id="citySearch"
            placeholder="Search for a city..."
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
          />
          <button id="searchButton" onClick={handleSearch}>
            Search
          </button>
          {weather && (
            <div id="weatherData">
              <div>Temperature: {weather.temperature}</div>
              <div>Humidity: {weather.humidity}</div>
              <div>Wind Speed: {weather.windSpeed}</div>
            </div>
          )}
          {error && <div>{error}</div>}
          <div id="previousSearches">
            <strong>Previous Searches:</strong>
            <ul>
              {searchHistory.map((city) => (
                <li key={city} onClick={() => handleCityClick(city)}>
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default Wheather


