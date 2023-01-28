import React, {useMemo, useState} from 'react';
import axios from "axios";
import {Wrapper} from "../UI/Wrapper";
import {ForecastContainer, ForecastItem, ForecastList, ForecastText, GrayLine, MainBlock} from "../UI/HourlyForecast";
import {TitleText} from "../UI/HourlyForecast";
import StateImage from "../UI/stateImage";
import ArrowLeft from "../Icons/ArrowLeft.svg";
import ArrowRight from "../Icons/ArrowRight.svg"

const Forecast = (props) => {
const forecast_array = [...props.weatherObjects].map((item) =>{
    return (
        [item.dt_txt.split(` `).pop().slice(0,5), item.weather[0].main, Math.round(item.main.temp)]
    )}
);

    return(
        <Wrapper>
            <MainBlock>
                <TitleText>HOURLY FORECAST</TitleText>
                <GrayLine/>
                <div style={{display: "flex"}}>
                    <img src={ArrowLeft} alt="Left"/>
                <ForecastContainer>
                <ForecastList>
                    {[...forecast_array.slice(0, 20)].map((item)=>{
                        return(
                            <ForecastItem>
                                <ForecastText>{item[0]}</ForecastText>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <StateImage state = {item[1]} width = "40px"/>
                                </div>
                                <ForecastText>{item[2]}</ForecastText>
                            </ForecastItem>

                        )
                    })}
                </ForecastList>
                </ForecastContainer>
                    <img src={ArrowRight} alt="Right"/>
                </div>
            </MainBlock>
        </Wrapper>


    )
};

export default Forecast;