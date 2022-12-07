import React from 'react';
import { AdvantagesContainer, Title, Text, Advantage, Advantages } from './styled';

const advantagesColors = ['#FABFFF', '#FFCBB8', '#FCF6BD', '#FFBACB'];

const AdvantageBlock = () => {

  return (
    <AdvantagesContainer>
      <Title>Наши преимущества</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a diam porta, suscipit arcu ut, blandit 
        libero. Curabitur finibus, lorem sed bibendum faucibus, dui libero dapibus nibh, eu varius massa justo 
        ut sem. Praesent sed egestas neque. Vestibulum nec diam in nulla tempus tristique. 
      </Text>
      <Advantages>
        {advantagesColors.map((color) => <Advantage color={color} />)}
      </Advantages>
    </AdvantagesContainer>
  );
}

export default AdvantageBlock;