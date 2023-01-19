// noinspection BadExpressionStatementJS

import React, {useState, useEffect, useMemo} from 'react';
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [ip, setIp] = useState(0);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [weather, setWeather] = useState({
      "coord": {
          "lon": 0,
          "lat": 0
      },
      "weather": [
          {
              "id": 0,
              "main": "",
              "description": "",
              "icon": ""
          }
      ],
      "base": "",
      "main": {
          "temp": 0,
          "feels_like": 0,
          "temp_min": 0,
          "temp_max": 0,
          "pressure": 0,
          "humidity": 0,
          "sea_level": 0,
          "grnd_level": 0
      },
      "visibility": 0,
      "wind": {
          "speed": 0,
          "deg": 0,
          "gust": 0
      },
      "clouds": {
          "all": 0
      },
      "dt": 0,
      "sys": {
          "type": 0,
          "id": 0,
          "country": "",
          "sunrise": 0,
          "sunset": 0
      },
      "timezone": 0,
      "id": 0,
      "name": "",
      "cod": 0
  });

  useEffect(() => console.log(ip))

    useMemo(() => {
        axios.get("https://api.ipify.org?format=json").then((response)=> setIp(response.data.ip))

        console.log(ip);
        axios.get("https://api.ipgeolocation.io/ipgeo?apiKey=af5d388c6349462ebfbfd81a9f2731d9&ip=" + ip + "&fields=geo").then((response) => {
            setLat(response.data.latitude)
            setLong(response.data.longitude)
        })
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=4bb9a45b2363f6eb4731e46bfe050825&units=metric")
            .then(response => setWeather(response.data));
    }, []);

  return (
      <div>
        <h1> Temperature in {weather.name} is {weather.main.temp} °C </h1>
        <input value={city} onChange={(e) => setCity(e.target.value)}></input>
        <button>ya dura</button>
      </div>
  );
};

export default App;


