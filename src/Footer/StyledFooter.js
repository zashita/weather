import styled from "styled-components";
import {HeaderWrapper} from "../UI/Wrapper";
import {BlockText} from "../UI/Realtime";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 80px;
  border-top: 1px solid ${props => props.theme.colors.dividers};
  align-items: center;
  display: flex;
  margin: 0 auto;
  bottom: 0;
  position: fixed;
  z-index: 5000;
  background-color: ${props => props.theme.colors.pageBackground};
    `

export const FooterWrapper = styled(HeaderWrapper)`
  
`
export const FooterLinks = styled.a`
  color: ${props => {
    if(props.color === "main") return props.theme.colors.mainText;
    else return props.theme.colors.additionalText
  }};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
`