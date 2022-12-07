import React from 'react';
import { InfoContainer, AboutContainer, GirlImageBox, CakeImageBox, TitleColor, Text, Title } from './styled';

const AboutBLock = () => {
  
  return (
    <AboutContainer>
      <InfoContainer>
        <GirlImageBox />
        <div>
        <Title>О <TitleColor>нас</TitleColor></Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a 
          diam porta, suscipit arcu ut, blandit libero. Curabitur finibus, 
          lorem sed bibendum faucibus, dui libero dapibus nibh, eu 
          varius massa justo ut sem. Praesent sed egestas neque. Vestibulum 
          nec diam in nulla tempus tristique. Praesent vitae lacus ultrices 
          lorem dictum dapibus in id urna.
        </Text>
        </div>
      </InfoContainer>
      <InfoContainer right>
        <CakeImageBox />
        <div>
          <Title bottom>История <TitleColor>создания</TitleColor></Title>
          <Text bottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a 
            diam porta, suscipit arcu ut, blandit libero. Curabitur finibus, 
            lorem sed bibendum faucibus, dui libero dapibus nibh, eu 
            varius massa justo ut sem. Praesent sed egestas neque. Vestibulum 
            nec diam in nulla tempus tristique. Praesent vitae lacus ultrices 
            lorem dictum dapibus in id urna.
          </Text>
        </div>
      </InfoContainer>
    </AboutContainer>
  );
}

export default AboutBLock;
