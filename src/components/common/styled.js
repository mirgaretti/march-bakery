import styled from "styled-components";

export const CommonTitle = styled.h1`
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 85px;

  color: ${(props) => props.color || 'black'};
`;

export const CommonText = styled.div`
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 37px;

  color: ${(props) => props.color};
`;