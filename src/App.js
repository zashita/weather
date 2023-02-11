// noinspection BadExpressionStatementJS

import React, {useState, useEffect, useMemo} from 'react';
import axios from "axios";
import Realtime from "./components/realtime";
import {LogoText} from "./UI/HeaderLogo";
import Header from "./Header/Header";
import CityInput from "./UI/CityInput";
import Forecast from "./components/forecast";
import Loader from "./components/loader";
import DailyForecast from "./components/daily_forecast";
import {ThemeProvider} from "styled-components";
import Global from "./global";
import Footer from "./Footer/Footer";

const light_theme = {
    colors:{
        mainText: `#202020`,
        additionalText: `#A8B0C2`,
        dividers: `#DCDFE7`,
        pageBackground: `#F6F6F6`,
        cardBackground: `#FFFFFF`

    },
    media:{
        phone: "(max-width: 480px)",
        tablet_640: "(max-width: 640px) and (min-width: 480px)",
        tablet_768: "(max-width: 768px) and (min-width: 640px)",
        desktop_1024: "(max-width: 1024px) and (min-width: 768px)",
        desktop_1080: "(max-width: 1080px) and (min-width: 1024px)"
    }
}
const dark_theme = {
    colors:{
        mainText: `#F2F2F2`,
        additionalText: `#919191`,
        dividers: `#4E4E4E`,
        pageBackground: `#222222`,
        cardBackground: `#292929`

    },
    media:{
        phone: "(max-width: 480px)",
        tablet_640: "(max-width: 640px) and (min-width: 480px)",
        tablet_768: "(max-width: 768px) and (min-width: 640px)",
        desktop_1024: "(max-width: 1024px) and (min-width: 768px)",
        desktop_1080: "(max-width: 1080px) and (min-width: 1024px)"
    }
}



const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [cityInputValue, setCityInputValue] = useState("");
  const [currentTheme,setCurrentTheme] = useState(`light`);
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
        <ThemeProvider theme={currentTheme === `light`?light_theme: dark_theme}>
            <Global/>
        <div>
            <Header value = {cityInputValue} setValue = {setCityInputValue} city = {city} setCity = {setCity} currentTheme = {currentTheme} setCurrentTheme = {setCurrentTheme}/>
            {loading?<Loader/>:<Realtime weather = {weather} />}
            {loading?<div/>:<Forecast weatherObjects = {forecastObjects}/>}
            {loading?<div/>:<DailyForecast weatherObjects = {forecastObjects}/>}
            {loading?<div/>:<Footer/>}
        </div>
        </ThemeProvider>
    )
};

export default App;


