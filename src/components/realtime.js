import React, {useState} from 'react';
import {Wrapper} from "../UI/Wrapper";
import {RealtimeBlock, RealtimeMeteoPhenBlock, RealtimeTemp, RealtimeTempVal, BlockText, Line} from "../UI/Realtime";
import Clouds from "../Icons/states/Clouds.svg";


const Realtime = (props) => {

    return (
        <Wrapper>
            <RealtimeBlock>
                <RealtimeTemp>
                    <RealtimeTempVal> {Math.round(props.weather.main.temp)}°</RealtimeTempVal>
                </RealtimeTemp>
                <RealtimeMeteoPhenBlock> <img src={Clouds}/></RealtimeMeteoPhenBlock>
                <div>
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
                        <BlockText color = {"black"}>{props.weather.main.humidity}°</BlockText>
                    </Line>

                    <Line>
                        <BlockText>Pressure:</BlockText>
                        <BlockText color = {"black"}>{props.weather.main.pressure}°</BlockText>
                    </Line>
                </div>
            </RealtimeBlock>
        </Wrapper>
    );
};

export default Realtime;