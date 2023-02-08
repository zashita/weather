import styled from "styled-components";
import React from "react";

export const Wrapper = styled.div`
    width: 1090px;
    margin: 0 auto;
  @media ${props => props.theme.media.phone} {
    width: 91.66vw;
  }
  @media ${props => props.theme.media.tablet_640}{
    width: 93.75vw;
  }
  @media ${props => props.theme.media.tablet_768}{
    width: 93.75vw;
  }
  @media ${props => props.theme.media.desktop_1024}{
    width: 88.86vw;
  }
`
export const HeaderWrapper = styled(Wrapper)`
display: flex;
  justify-content: space-between;
  align-items: center;
  

`
