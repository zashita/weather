import React from 'react';
import Clouds from "../Icons/states/Clouds.svg"
import Clear from "../Icons/states/Clear.svg"
import Fog from "../Icons/states/Fog.svg"
import Snow from "../Icons/states/Snow.svg"
import Rain from "../Icons/states/Rain.svg"
import {PhenImg} from "./PhenImg";

const StateImage = (props) => {
    switch (props.state.toLowerCase()) {
        case "clouds":
            return(<PhenImg {...props} src={Clouds} alt={props.state}/>);

        case "clear":
            return (<PhenImg {...props} src={Clear} alt={props.state}/>);

        case "fog":
            return (<PhenImg {...props} src={Fog} alt={props.state}/>);

        case "snow":
            return (<PhenImg {...props} src={Snow} alt={props.state}/>);

        case "rain":
            return (<PhenImg {...props} src={Rain} alt={props.state}/>)

        default:
            return (<p>ERROR</p>)

                }
};
export default StateImage;

