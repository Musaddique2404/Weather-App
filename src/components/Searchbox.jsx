/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import Alert from '@mui/material/Alert';


export default function Searchbox({ updateInfo }) {
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5dcf47d361b4253c6ce5c1dce8915dab";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();

      if (response.ok) {
        let result = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelsLike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
      } else {
        setError(true);  // Handle cases where the city is not found
        return null;
      }
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      setError(false);  // Reset error state on submit
      console.log(city);
      let newInfo = await getWeatherInfo();
      if (newInfo) {
        updateInfo(newInfo);  // Call parent function to update info
      }
    } catch (err) {
      setError(true);  // Show error if the API call fails
    }
    setCity('');  // Reset input field after submission
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <div id="search-box" className="flex justify-center mt-4">
          <div className="flex w-full items-center space-x-2 md:w-1/3">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="search"
              placeholder="Search for Location"
              required
              value={city}
              onChange={handleChange}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
              Send
            </Button>
          </div>
        </div>
        {error && (
          <div className="flex justify-center mt-4">
            <Alert severity="warning" onClose={() => setError(false)}>
              No such place exists.
            </Alert>
          </div>
        )}
      </form>
    </div>
  );
}
