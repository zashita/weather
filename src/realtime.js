import React from 'react';
import {Wrapper} from "./Wrapper";

const Realtime = (props) => {
    return (
        <Wrapper>
            <h1> Temperature in {props.weather.name} is {props.weather.main.temp} °C </h1>
        </Wrapper>
    );
};

export default Realtime;