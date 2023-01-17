import React from 'react';
import {StyledHeader} from "./StyledHeader";
import {HeaderWrapper} from "../Wrapper";

const Header = ({children}) => {
    return (
        <StyledHeader>
            <HeaderWrapper>
                {children}
            </HeaderWrapper>
        </StyledHeader>
    );
};

export default Header;