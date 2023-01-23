import React from 'react';
import {StyledHeader} from "./StyledHeader";
import {HeaderWrapper} from "../UI/Wrapper";
import {LogoText} from "../UI/HeaderLogo";
import CityInput from "../UI/CityInput";

const Header = (props) => {
    return (
        <StyledHeader>
            <HeaderWrapper>
                <LogoText >VelichWeather</LogoText>
                <CityInput {...props}/>
            </HeaderWrapper>
        </StyledHeader>
    );
};

export default Header;