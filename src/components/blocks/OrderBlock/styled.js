import React from 'react';
import styled from 'styled-components';
import { CommonText, CommonTitle } from '../../common/styled';

export const OrderBLockContainer = styled.div`
  background: center right no-repeat url('media/orderBackground.svg');
`;

export const Title = styled(CommonTitle)`
  width: fit-content;
  margin: 0 auto;
  text-align: center;
`;

export const OptionsContainer = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const OptionContainer = styled.div`
  width: 400px;
  height: 600px;
  background: #FFFFFF;
  border: 3px solid ${(props) => props.color};
  border-radius: 45px;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled(CommonText)`
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  font-size: 35px;
  line-height: 50px;
`;

const OrderButton = styled.button`
  width: 300px;
  height: 100px;
  background: ${(props) => props.color};
  border-radius: 50px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 37px;
  color: white;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 1;
  }
`;

export const Option = (props) => {
  const { option: { title, price, weight, people, color } } = props;

  return (
    <OptionContainer color={color}>
      <Title>{title}</Title>
      <div>
        <Text>{price}</Text>
        <Text>{weight}</Text>
        <Text>{people}</Text>
      </div>
      <OrderButton color={color}>Заказать</OrderButton>
    </OptionContainer>
  );
}