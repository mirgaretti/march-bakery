import React from 'react';
import { orderOptions } from '../../common/utils';
import { OrderBLockContainer, Title, OptionsContainer, Option } from './styled';

const OrderBLock = (props) => {
  const { handleClick } = props;

  return (
    <OrderBLockContainer>
      <Title>Оформление заказа</Title>
      <OptionsContainer>
        {orderOptions.map((option) => <Option handleClick={() => handleClick(option)} key={option.title} option={option} />)}
      </OptionsContainer>
    </OrderBLockContainer>
  );
}

export default OrderBLock;