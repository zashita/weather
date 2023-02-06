import React, {useState} from 'react';
import {Wrapper} from "../UI/Wrapper";
import {
    RealtimeBlock,
    RealtimeMeteoPhenBlock,
    RealtimeTemp,
    RealtimeTempVal,
    BlockText,
    Line,
    Location, LocationText
} from "../UI/Realtime";
import StateImage from "../UI/stateImage";
import {TitleText} from "../UI/HourlyForecast";
import {months} from "../Interfaces/Arrays";


const Realtime = (props) => {
    const currentDate = new Date()
    const DateNLocation = `${props.weather.name}, ${months[currentDate.getMonth()]} 
        ${currentDate.getDate()}, 
        ${currentDate.getHours()}:${currentDate.getMinutes()}`


    return (
        <Wrapper>
            <RealtimeBlock>
                <Location>
                    <LocationText>
                        {DateNLocation}
                    </LocationText>
                </Location>
                <RealtimeTemp>
                    <RealtimeTempVal> {Math.round(props.weather.main.temp)}°</RealtimeTempVal>
                </RealtimeTemp>
                <RealtimeMeteoPhenBlock>
                    <StateImage state = {props.weather.weather[0].main} width = {"60px"}/>
                </RealtimeMeteoPhenBlock>
                <div style={{paddingTop: "20px"}}>
                    <Line>
                        <BlockText>Real feel: </BlockText>
                        <BlockText color = {"main"}>{props.weather.main.feels_like}°</BlockText>
                    </Line>

                    <Line>
                        <BlockText>Wind: </BlockText>
                        <BlockText color = {"main"}>{props.weather.wind.speed} m/s, {props.weather.wind.deg}</BlockText>
                    </Line>

                    <Line>
                        <BlockText>Humidity:</BlockText>
                        <BlockText color = {"main"}>{props.weather.main.humidity}%</BlockText>
                    </Line>

                    <Line>
                        <BlockText>Pressure:</BlockText>
                        <BlockText color = {"main"}>{props.weather.main.pressure} mbar</BlockText>
                    </Line>
                </div>
            </RealtimeBlock>
        </Wrapper>
    );
};

export default Realtime;