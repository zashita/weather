import React, {useState} from 'react';
import {Wrapper} from "../UI/Wrapper";
import {RealtimeBlock, RealtimeMeteoPhenBlock, RealtimeTemp, RealtimeTempVal, BlockText, Line} from "../UI/Realtime";


const Realtime = (props) => {

    return (
        <Wrapper>
            <RealtimeBlock>
                <RealtimeTemp>
                    <RealtimeTempVal> {Math.round(props.weather.main.temp)}°</RealtimeTempVal>
                </RealtimeTemp>
                <RealtimeMeteoPhenBlock/>
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
                        <BlockText>Real feel:</BlockText>
                        <BlockText color = {"black"}>{props.weather.main.feels_like}°</BlockText>
                    </Line>

                    <Line>
                        <BlockText>Real feel:</BlockText>
                        <BlockText>{props.weather.main.feels_like}°</BlockText>
                    </Line>
                    {/*<BlockText>*/}
                    {/*    {props.weather.wind.speed} m/s, {props.weather.wind.deg}*/}
                    {/*</BlockText>*/}
                    {/*<BlockText>*/}
                    {/*    Humidity: {props.weather.main.humidity} %*/}
                    {/*</BlockText>*/}
                    {/*<BlockText>*/}
                    {/*    Pressure: {props.weather.main.pressure} mbar*/}
                    {/*</BlockText>*/}
                </div>
            </RealtimeBlock>
        </Wrapper>
    );
};

export default Realtime;