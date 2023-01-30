import React from 'react';

const DailyForecast = (props) => {

    const currentDate = new Date();
const forecast_array = [...props.weatherObjects.filter(item=>
    currentDate.getDate() !== Number(item.dt_txt.split(` `).shift().split("-").pop())// Comparing Dates
)] //TODO: if possible rewrite using UNIX format
    const temps = [...forecast_array.map((item)=>{
        return Math.round(item.main.temp);
    })];

    const rf_array = [...forecast_array.map((item)=>{
        return Math.round(item.main.feels_like);
    })]

    const winds = [...forecast_array.map((item)=>{
        return item.wind.speed;
    })]

    const humidity_array = [...forecast_array.map((item)=>{
        return item.main.humidity;
    })]

    const pressure_array = [...forecast_array.map((item)=>{
        return item.main.pressure;
    })]

    const Day_1 = {
        temp: temps.slice(0,8).reduce((a,b)=>{
            return a + b;
    })/temps.slice(0,8).length
    }
    const Day_2 = {
        temp: temps.slice(8,16).reduce((a,b)=>{
            return a + b;
        })/temps.slice(0,8).length
    }
    const Day_3 = {
        temp: temps.slice(16,32).reduce((a,b)=>{
            return a + b;
        })/temps.slice(0,8).length
    }
    console.log(Day_1, Day_2, Day_3)
    return (
        <div>

        </div>
    );
};

export default DailyForecast;