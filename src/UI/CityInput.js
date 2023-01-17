import React, {useState} from 'react';

const CityInput = () => {
    const [city, setCity] = useState("");
    return (
        <input value={city} onChange={(e) => setCity(e.target.value)}></input>
    );
};

export default CityInput;