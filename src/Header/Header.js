import React from 'react';
import {SearchIcon, StyledHeader} from "./StyledHeader";
import {HeaderWrapper} from "../UI/Wrapper";
import {LogoText} from "../UI/HeaderLogo";
import CityInput from "../UI/CityInput";
import Search from "../Icons/Search.svg"

const Header = (props) => {
    return (
        <StyledHeader>
            <HeaderWrapper>
                <LogoText >VelichWeather</LogoText>
                <div style={{display: "flex"}}>
                    <CityInput {...props}/>
                    <SearchIcon><img src={Search} alt={"Search"}/></SearchIcon>
                </div>

            </HeaderWrapper>
        </StyledHeader>
    );
};

export default Header;