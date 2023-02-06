import styled from "styled-components";
export const DailyForecastContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
  grid-gap: 20px;
    
    `
export const Card = styled.div`
  width: 350px;
  height: 260px;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 20px;
  padding-top: 20px;
  padding-left: 20px;
    `

export const DayInfo = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px;
    
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