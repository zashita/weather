import React, {useMemo, useState} from 'react';
import axios from "axios";

const ForecastBlock = () => {
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
    const assignCustomCords =  (cityname)=>{
        axios.get("https://api.openweathermap.org/geo/1.0/direct?q=" + cityname + "&limit=1&appid=4bb9a45b2363f6eb4731e46bfe050825")
            .then(response =>{
                setLat(response.data[0].lat)
                setLong(response.data[0].lon)
            })
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=4bb9a45b2363f6eb4731e46bfe050825&units=metric")
            .then(response => setWeather(response.data));


    }
    useMemo(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        })
        const options = {
            method: 'GET',
            url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly',
            params: {lat: lat, lon: long, hours: '12'},
            headers: {
                'X-RapidAPI-Key': '5ab54c3597msh910ae768f53000ep1026d8jsn26fc10ff7cd9',
                'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        })
    }, []);


    return (
        <div>
            
        </div>
    );
};

export default ForecastBlock;