import styled from "styled-components";
import React from "react";
export const RealtimeBlock = styled.div`
    margin: 140px 0;
    min-width: 416px;
    height: 186px;
    display: grid;
   grid-template-columns: auto 60px auto;
    `
export const RealtimeTempVal = styled.p`
    font-size: 150px;
    line-height: 100px;
`

export const RealtimeTemp = styled.div`
    width: 100%;
  height: 100%;
      `
 export const RealtimeMeteoPhenBlock = styled.div`
 width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   
 `
export const BlockText = styled.p`
    color: ${props => props.color? props.color: "#A8B0C2"};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`
export const Line = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-bottom: 6px;
    `