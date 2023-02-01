import React from 'react';
import {Card, DailyForecastContainer, DayInfo, DayTemp, InfoRow} from "../UI/DailyForecast";
import {Wrapper} from "../UI/Wrapper";
import {GrayLine, TitleText} from "../UI/HourlyForecast";
import {BlockText, Line} from "../UI/Realtime";
import {months, weekdays} from "../Interfaces/Arrays";

const DailyForecast = (props) => {

    const forecastsPerDay = 8;

    const GetAverage = (array, start)=>{
      return Math.round(array.slice(start, start + forecastsPerDay).reduce((a,b)=>{
          return a + b;
      })/forecastsPerDay);
    }

    const currentDate = new Date();
    const forecast_array = [...props.weatherObjects.filter(item=>
    currentDate.getDate() !== Number(item.dt_txt.split(` `).shift().split("-").pop())// Comparing Dates
)] //TODO: if possible rewrite using UNIX format
    const temps = [...forecast_array.map((item)=>{
        return item.main.temp;
    })];

    const rf_array = [...forecast_array.map((item)=>{
        return item.main.feels_like;
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

    const phens = [...forecast_array.map((item)=>{
        return item.weather[0].main;
    })]

    const dates = [...forecast_array].map((item) =>{
        return new Date(item.dt * 1000);
    } )
    let firstForecastOfTheDay = -forecastsPerDay;
    const days = Array.from(Array(3), ()=>{
        firstForecastOfTheDay += forecastsPerDay;
        return(
            {
                temp: GetAverage(temps, firstForecastOfTheDay),
                real_feel: GetAverage(rf_array, firstForecastOfTheDay),
                wind: GetAverage(winds,firstForecastOfTheDay),
                humidity: GetAverage(humidity_array, firstForecastOfTheDay),
                pressure: GetAverage(pressure_array,firstForecastOfTheDay),
                date: `${weekdays[dates[firstForecastOfTheDay + 4].getDay()]}, ${months[dates[firstForecastOfTheDay+4].getMonth()]} ${dates[firstForecastOfTheDay +4].getDate()}`
            }
        )
    })

    console.log(days)
    return (
        <Wrapper>
            <DailyForecastContainer>
                {days.map((day,index)=>{
                    return(
                        <Card>
                            {index===0?<TitleText>TOMORROW</TitleText>:<TitleText>{day.date}</TitleText>}
                            <GrayLine/>
                            <DayTemp>{day.temp}°</DayTemp>
                            <DayInfo>
                                <InfoRow>
                                    <Line>
                                        <BlockText>Reel feel: </BlockText>
                                        <BlockText color = "black">{day.real_feel}°</BlockText>
                                    </Line>
                                    <Line>
                                        <BlockText>Wind: </BlockText>
                                        <BlockText color = "black">{day.wind}</BlockText>
                                    </Line>
                                </InfoRow>
                                <InfoRow>
                                    <Line>
                                        <BlockText>Humidity: </BlockText>
                                        <BlockText color = "black">{day.humidity}</BlockText>
                                    </Line>
                                    <Line>
                                        <BlockText>Pressure: </BlockText>
                                        <BlockText color = "black">{day.pressure}</BlockText>
                                    </Line>
                                </InfoRow>
                            </DayInfo>

                        </Card>
                    )
                })}
            </DailyForecastContainer>
        </Wrapper>
    );
};

export default DailyForecast;