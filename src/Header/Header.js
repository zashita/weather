import React from 'react';
import {SearchIcon, StyledHeader, ThemeIcon} from "./StyledHeader";
import {HeaderWrapper} from "../UI/Wrapper";
import {LogoText} from "../UI/HeaderLogo";
import CityInput from "../UI/CityInput";
import Search from "../Icons/Search.svg";
import ThemeSwitch from "../Icons/Theme switch.svg"

const Header = (props) => {
    const themeIsDark = props.currentTheme !== `light`;
    return (
        <StyledHeader>
            <HeaderWrapper>
                <LogoText>VelichWeather</LogoText>
                <div style={{display: "flex"}}>
                    <CityInput {...props}/>
                    <SearchIcon><img src={Search} alt={"Search"}/></SearchIcon>
                    <ThemeIcon src={ThemeSwitch} alt = {`Switch theme`}
                               onClick={()=>{
                                   themeIsDark? props.setCurrentTheme('light'): props.setCurrentTheme(`dark`);
                               }}
                    />

                </div>

            </HeaderWrapper>
        </StyledHeader>
    );
};

export default Header;