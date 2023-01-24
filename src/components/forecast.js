import React, {useMemo, useState} from 'react';
import axios from "axios";
import {Wrapper} from "../UI/Wrapper";
import {ForecastList, ForecastText, MainBlock} from "../UI/HourlyForecast";

const Forecast = (props) => {
const temperature = [...props.weatherObjects].map((item) =>{
    return (
        item.main.temp
    )}
);
    return(
        <Wrapper>
            <MainBlock>
                <ForecastList>
                    {temperature.map((item)=>{
                        return(
                            <li><ForecastText>{Math.round(item)}</ForecastText></li>
                        )
                    })}
                </ForecastList>
            </MainBlock>
        </Wrapper>


    )
};

export default Forecast;