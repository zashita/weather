import React from 'react';
import {FooterLinks, StyledFooter} from "./StyledFooter"
import {FooterWrapper} from "./StyledFooter"
import {BlockText, Line} from "../UI/Realtime";

const Footer = () => {
    return (
        <StyledFooter>
            <FooterWrapper>
                <Line>
                    <FooterLinks>Design: </FooterLinks>
                    <FooterLinks color={"main"} href = {"https://www.behance.net/velichdsgn"}>Velichdsgn</FooterLinks>
                </Line>
                <Line>
                    <FooterLinks>Data:</FooterLinks>
                    <FooterLinks color={"main"}>One Call API 3.0</FooterLinks>
                </Line>
            </FooterWrapper>
        </StyledFooter>
    );
};

export default Footer;