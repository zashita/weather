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
import Clouds from "../Icons/states/Clouds.svg";
import StateImage from "../UI/stateImage";
import {TitleText} from "../UI/HourlyForecast";


const Realtime = (props) => {
    const Months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `June`, `July`, 'Aug', `Sept`, `Oct`, `Nov`, `Dec`]
    const currentDate = new Date()
    const DateNLocation = `${props.weather.name}, ${Months[currentDate.getMonth()]} 
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
                        <BlockText color = {"black"}>{props.weather.main.feels_like}°</BlockText>
                    </Line>

                    <Line>
                        <BlockText>Wind: </BlockText>
                        <BlockText color = {"black"}>{props.weather.wind.speed} m/s, {props.weather.wind.deg}</BlockText>
                    </Line>

                    <Line>
                        <BlockText>Humidity:</BlockText>
                        <BlockText color = {"black"}>{props.weather.main.humidity}%</BlockText>
                    </Line>

                    <Line>
                        <BlockText>Pressure:</BlockText>
                        <BlockText color = {"black"}>{props.weather.main.pressure} mbar</BlockText>
                    </Line>
                </div>
            </RealtimeBlock>
        </Wrapper>
    );
};

export default Realtime;