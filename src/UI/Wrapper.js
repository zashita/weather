import styled from "styled-components";
import React from "react";

export const Wrapper = styled.div`
    width: 1090px;
    margin: 0 auto;
  @media ${props => props.theme.media.phone} {
    width: 91.66%;
  }
  @media ${props => props.theme.media.tablet_640}{
    width: 93.75%;
  }
  @media ${props => props.theme.media.tablet_768}{
    width: 93.75%;;
  }
  @media ${props => props.theme.media.desktop_1024}{
    width: 88.86%;
  }
`
export const HeaderWrapper = styled(Wrapper)`
display: flex;
  justify-content: space-between;
  align-items: center;
  

`
