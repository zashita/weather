import React, {useMemo, useState} from 'react';
import axios from "axios";
import {Wrapper} from "../UI/Wrapper";
import {ForecastContainer, ForecastItem, ForecastList, ForecastText, GrayLine, MainBlock} from "../UI/HourlyForecast";
import {TitleText} from "../UI/HourlyForecast";
import StateImage from "../UI/stateImage";
import ArrowLeft from "../Icons/ArrowLeft.svg";
import ArrowRight from "../Icons/ArrowRight.svg"

const Forecast = (props) => {

const [offset, setOffset] = useState(0);
const FORECAST_ARRAY_LENGTH = 20;
const LIST_WIDTH = (FORECAST_ARRAY_LENGTH * 42) + ((FORECAST_ARRAY_LENGTH - 1) * 30);
const SLIDE_WIDTH = 300;
const forecast_array = [...props.weatherObjects].map((item) =>{
    return (
        [item.dt_txt.split(` `).pop().slice(0,5), item.weather[0].main, Math.round(item.main.temp), item.dt]
    )}
);
console.log(offset);

    return(
        <Wrapper>
            <MainBlock>
                <TitleText>HOURLY FORECAST</TitleText>
                <GrayLine/>
                <div style={{display: "flex"}}>
                    <img src={ArrowLeft} alt="Left"
                         onClick={() => setOffset((current) =>{
                             return Math.min(current + SLIDE_WIDTH, 0);
                         })}
                    />
                <ForecastContainer>
                <ForecastList
                style={{
                    transform: `translateX(${offset}px)`
                }} //TODO: Fix right slide limit
                >
                    {[...forecast_array.slice(0, FORECAST_ARRAY_LENGTH)].map((item)=>{
                        return(
                            <ForecastItem key={item[3]}>
                                <ForecastText size = {"16px"}>{item[0]}</ForecastText>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <StateImage state = {item[1]} width = "40px"/>
                                </div>
                                <ForecastText>{item[2]}</ForecastText>
                            </ForecastItem>

                        )
                    })}
                </ForecastList>
                </ForecastContainer>
                    <img src={ArrowRight} alt="Right"
                         onClick={() => setOffset((current) =>{
                             return Math.max(current - SLIDE_WIDTH, -LIST_WIDTH + 920);
                         })}
                    />
                </div>
            </MainBlock>
        </Wrapper>



    )
};

export default Forecast;