// noinspection BadExpressionStatementJS

import React, {useState, useEffect, useMemo} from 'react';
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
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

  const assignUserCords = async ()=> {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    })
  }
  const assignCustomCords =  (cityname)=>{
      axios.get("https://api.openweathermap.org/geo/1.0/direct?q=" + cityname + "&limit=1&appid=4bb9a45b2363f6eb4731e46bfe050825")
          .then(response =>{
              setLat(response.data[0].lat)
              setLong(response.data[0].lon)
          })


  }
    useMemo(() => {
            assignUserCords().then(() =>{
                axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=4bb9a45b2363f6eb4731e46bfe050825&units=metric")
                    .then(response => setWeather(response.data));
                console.log(weather)

            });
        }
        , [lat, long]);

    console.log(weather);
  return (
      <div>
        <h1> Temperature in {weather.name} is {weather.main.temp} °C </h1>
        <input value={city} onChange={(e) => setCity(e.target.value)}></input>
        <button onClick={()=> assignCustomCords(city)}>ya dura</button>
      </div>
  );
};

export default App;


