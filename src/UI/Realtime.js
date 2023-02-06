import styled from "styled-components";
import React from "react";
import {TitleText} from "./HourlyForecast";
export const RealtimeBlock = styled.div`
    margin-top: 140px;
  margin-bottom: 0;
    min-width: 416px;
    max-width: 500px;
    height: 186px;
    display: grid;
   grid-template-columns: auto 90px auto;
    grid-template-rows: 16px 160px;
    `
export const RealtimeTempVal = styled.p`
  font-weight: 300;
  font-style: normal;
    font-size: 150px;
    line-height: 150px;
  color: ${props => props.theme.colors.mainText};
`

export const RealtimeTemp = styled.div`
   
  height: 100%;
      `
 export const RealtimeMeteoPhenBlock = styled.div`
 width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: left;
   
 `
export const BlockText = styled.p`
    color: ${props => {
        if(props.color === "main") return props.theme.colors.mainText;
        else return props.theme.colors.additionalText
    }};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`
export const Line = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-bottom: 10px;
  :last-child{
    margin-bottom: 0;
  }
    `
export const Location = styled.div`
    grid-column:1/ span 3 ;
    `
export const LocationText = styled(TitleText)`
margin-bottom: 0;
  width: 100%;
`