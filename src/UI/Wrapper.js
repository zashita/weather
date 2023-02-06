import styled from "styled-components";
import React from "react";

export const Wrapper = styled.div`
    width: 1090px;
    margin: 0 auto;
  @media ${props => props.theme.media.phone} {
    width: 440px;
  }
  @media ${props => props.theme.media.tablet_640}{
    width: 600px;
  }
  @media ${props => props.theme.media.tablet_768}{
    width: 720px;
  }
  @media ${props => props.theme.media.desktop_1024}{
    width: 910px;
  }
`
export const HeaderWrapper = styled(Wrapper)`
display: flex;
  justify-content: space-between;
  align-items: center;
  

`
