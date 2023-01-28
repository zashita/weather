import styled from "styled-components";
import React from "react";
export const MainBlock = styled.div`
  width: 1090px;
  height: 223px;
  border-radius: 30px;
  background-color: white;
  padding-top: 20px;
  padding-left: 20px;
    `

export const ForecastList = styled.ul`
    display: flex;
  transition: translate;
  transition-property: transform;
  transition-duration:  0.8s;
  transition-timing-function: ease-in-out;
    `
export const ForecastItem = styled.li`
    list-style-type: none;
    display: grid;
    grid-template-rows: 19px 40px 25px;
    grid-row-gap: 15px;
    margin-right: 30px;
  :last-child{
    margin-right: 0;
  }
`
export const ForecastText = styled.p`
  font-weight: 400;
  font-size: ${props => props.size? props.size: "20px"};
  line-height: 23px;
  text-align: center;
  

  color: #202020;
    `

export const TitleText = styled.p`
  width: 152px;
  height: 16px;
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  position: relative;

  /* System/Gray */

  color: #A8B0C2;
    `

export const GrayLine = styled.div`
    width: 96.3302752293578%;
    height: 0;
    border-bottom: 1px solid #DCDFE7;
    margin-bottom: 30px;
    position: relative;
    
    
    `
export const ForecastContainer = styled.div`
    width: 920px;
    overflow: hidden;
    margin-left: 20px;
    margin-right: 20px;
    
    
    `