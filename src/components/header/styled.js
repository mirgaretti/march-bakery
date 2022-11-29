import React from 'react';
import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  align-items: center;
  margin: 0 130px 0 0;
`;

export const HeaderButton = styled.button`
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: ${(props) => props.color};
  border: 0px;
  outline: none;
  background: none;
  height: fit-content;
  cursor: pointer;
`;

export const Logo = styled.img`
`;

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 0 0 33px;
  position: absolute;
  display: flex;
  justify-content: space-between;
`;