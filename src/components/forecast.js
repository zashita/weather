import React, {useMemo, useState} from 'react';
import axios from "axios";
import {Wrapper} from "../UI/Wrapper";
import {ForecastItem, ForecastList, ForecastText, GrayLine, MainBlock} from "../UI/HourlyForecast";
import {TitleText} from "../UI/HourlyForecast";

const Forecast = (props) => {
const forecast_array = [...props.weatherObjects].map((item) =>{
    return (
        [item.dt_txt.split(` `).pop().slice(0,5), Math.round(item.main.temp)]
    )}
);

    return(
        <Wrapper>
            <MainBlock>
                <TitleText>HOURLY FORECAST</TitleText>
                <GrayLine/>
                <ForecastList>
                    {[...forecast_array].map((item)=>{
                        return(
                            <ForecastItem>
                                <ForecastText>{item[0]}</ForecastText>
                                <div></div>
                                <ForecastText>{item[1]}</ForecastText>
                            </ForecastItem>
                        )
                    })}
                </ForecastList>
            </MainBlock>
        </Wrapper>


    )
};

export default Forecast;