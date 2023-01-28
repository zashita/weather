// noinspection BadExpressionStatementJS

import React, {useState, useEffect, useMemo} from 'react';
import axios from "axios";
import Realtime from "./components/realtime";
import {LogoText} from "./UI/HeaderLogo";
import Header from "./Header/Header";
import CityInput from "./UI/CityInput";
import Forecast from "./components/forecast";
import Loader from "./components/loader";


const App = () => {
  const [city, setCity] = useState("");
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
  const [value, setValue] = useState("");
  const weather_api_key = `4bb9a45b2363f6eb4731e46bfe050825`;
  const [forecastObjects, setForecastObjects] = useState([]);
  const[loading, setLoading] = useState(true);
    useMemo(() => {
        if (city === ""){
            axios.get(`https://api.ipify.org?format=json`).then((response)=> {
                axios.get("https://api.ipgeolocation.io/ipgeo?apiKey=af5d388c6349462ebfbfd81a9f2731d9&ip=" + response.data.ip + "&fields=geo")
                    .then((response_geo) => {
                        axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + response_geo.data.latitude + "&lon=" + response_geo.data.longitude + `&appid=${weather_api_key}&units=metric`)
                            .then((weather_response) => {
                                setWeather(weather_response.data);
                            });
                        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${response_geo.data.latitude}&lon=${response_geo.data.longitude}&appid=${weather_api_key}&units=metric`)
                            .then((response_array) => {
                                setForecastObjects(response_array.data.list);
                                setLoading(false);
                            })
                    })
            })
        } else{
            axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${weather_api_key}`)
                .then((city_response)=>
                {
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city_response.data[0].lat}&lon=${city_response.data[0].lon}&appid=${weather_api_key}&units=metric`)
                        .then((weather_response)=> {
                            setWeather(weather_response.data)
                        })
                    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${city_response.data[0].lat}&lon=${city_response.data[0].lon}&appid=${weather_api_key}&units=metric`)
                        .then((response_array)=> {
                            setForecastObjects(response_array.data.list)
                            setLoading(false);
                        });

                })
        }
    }, [city]);
    return (
        <div>
            <Header value = {value} setValue = {setValue} city = {city} setCity = {setCity}/>
            {loading?<Loader/>:<Realtime weather = {weather} />}
            {loading?<div/> :<Forecast weatherObjects = {forecastObjects}/>}
        </div>

    )
};

export default App;


