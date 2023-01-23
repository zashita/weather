import React, {useState} from 'react';

const CityInput = (props) => {
    return (
        <input value={props.value} onChange={(e) => props.setValue(e.target.value)}
        onKeyDown={(event)=> {
            if(event.key === "Enter"){
                props.setCity(props.value);
            }
        }}></input>
    );
};

export default CityInput;