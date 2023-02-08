import styled from "styled-components";
export const DailyForecastContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
  grid-gap: 20px;
  width: 100%;
  
  @media ${props => props.theme.media.tablet_640}, ${props => props.theme.media.tablet_768}{
    grid-template-columns: auto auto;
  }
  }
  @media ${props => props.theme.media.phone}{
    grid-template-columns: auto auto auto auto;
    overflow: hidden;
  }
    `
export const Card = styled.div`
  width: 100%;
  height: 260px;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 20px;
  padding-top: 20px;
  padding-left: 20px;
  
  @media ${props => props.theme.media.tablet_640}, ${props => props.theme.media.desktop_1024}{
    width: 100%;
    height: 324px;
  }
  @media ${props => props.theme.media.tablet_768}{
    width: 100%;
  }
  @media ${props => props.theme.media.phone}{
    width: 91.66vw;
  }
    `

export const DayInfo = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px;
  @media ${props => props.theme.media.desktop_1024}, ${props => props.theme.media.tablet_640}{
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-gap: 10px
  }
    
    `

export const DayTemp = styled.div`
  font-weight: 320;
  font-size: 80px;
  line-height: 100%;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.mainText};
    `
export const InfoRow = styled.div`
    
    `