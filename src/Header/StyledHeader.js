import styled from "styled-components";
import React from "react";
export const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #DCDFE7;
    align-items: center;
    display: flex;
    margin: 0 auto;
    top: 0;
    position: fixed;
    z-index: 5000;
    background-color: ${props => props.theme.colors.pageBackground};
    `
export const SearchIcon = styled.div`
    margin-left: 0;
    border-radius: 0 20px 20px 0;
   width: 30px;
  height: 34px;
  background: ${props => props.theme.colors.cardBackground};
  /* System/Light gray */

  border: 1px solid ${props => props.theme.colors.dividers};
  border-left: 0;
  display: flex;
  align-items: center;
  justify-content: left;
    
    `
export const StyledInput = styled.input`
  border-radius: 20px 0 0 20px;
  padding-left: 12px;
  width: 180px;
  height: 34px;
  background: ${props => props.theme.colors.cardBackground};
  /* System/Light gray */

  border: 1px solid ${props => props.theme.colors.dividers};
  border-right: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */


  /* System/Gray */

  color: ${props => props.theme.colors.additionalText};

`