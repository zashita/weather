import React from 'react';
import {Card, DailyForecastContainer, DayInfo, DayTemp, InfoLine, InfoRow} from "../UI/DailyForecast";
import {Wrapper} from "../UI/Wrapper";
import {GrayLine, TitleText} from "../UI/HourlyForecast";
import {BlockText, Line} from "../UI/Realtime";

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

    const Day_1 = {
        temp: GetAverage(temps, 0),
        real_feel: GetAverage(rf_array, 0),
        wind: GetAverage(winds,0),
        humidity: GetAverage(humidity_array, 0),
        pressure: GetAverage(pressure_array,0)
    }
    const Day_2 = {
        temp: GetAverage(temps, 8),
        real_feel: GetAverage(rf_array, 8),
        wind: GetAverage(winds,8),
        humidity: GetAverage(humidity_array, 8),
        pressure: GetAverage(pressure_array,8)
    }
    const Day_3 = {
        temp: GetAverage(temps, 16),
        real_feel: GetAverage(rf_array, 16),
        wind: GetAverage(winds,16),
        humidity: GetAverage(humidity_array, 16),
        pressure: GetAverage(pressure_array,16)
    }
    const Day_4 = {
        temp: GetAverage(temps, 24),
        real_feel: GetAverage(rf_array, 24),
        wind: GetAverage(winds,24),
        humidity: GetAverage(humidity_array, 24),
        pressure: GetAverage(pressure_array,24)
    }
    const days = [Day_1, Day_2, Day_3]
    console.log(days, forecast_array.length)
    return (
        <Wrapper>
            <DailyForecastContainer>
                {days.map((day)=>{
                    return(
                        <Card>
                            <TitleText>TOMORROW</TitleText>
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