import React, {useState} from 'react';
import {StyledInput} from "../Header/StyledHeader";

const CityInput = (props) => {
    return (
        <StyledInput value={props.value} placeholder={"City"} onChange={(e) => props.setValue(e.target.value)}
        onKeyDown={(event)=> {
            if(event.key === "Enter"){
                props.setCity(props.value);
            }
        }}></StyledInput>
    );
};

export default CityInput;