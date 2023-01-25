import React, {useMemo, useState} from 'react';
import axios from "axios";
import {Wrapper} from "../UI/Wrapper";
import {ForecastList, ForecastText, GrayLine, MainBlock} from "../UI/HourlyForecast";
import {TitleText} from "../UI/HourlyForecast";

const Forecast = (props) => {
const temperature = [...props.weatherObjects].map((item) =>{
    console.log(item)
    return (
        item
    )}
);
    return(
        <Wrapper>
            <MainBlock>
                <TitleText>HOURLY FORECAST</TitleText>
                <GrayLine/>
                <ForecastList>
                    {temperature.map((item)=>{
                        return(
                            <li>
                                <ForecastText>{item.dt}</ForecastText>
                                <ForecastText>{Math.round(item.main.temp)}</ForecastText>
                            </li>
                        )
                    })}
                </ForecastList>
            </MainBlock>
        </Wrapper>


    )
};

export default Forecast;