import React from 'react';
import { Logo, HeaderButton, HeaderContainer, ButtonContainer } from './styled';

const Header = (props) => {
  const { theme, sliderPage } = props;
  const logoSrc = `media/logo${sliderPage}.svg`;

  return (
    <HeaderContainer>
      <Logo src={logoSrc} />
      <ButtonContainer>
        <HeaderButton color={theme.buttonColor}>Главная</HeaderButton>
        <HeaderButton color={theme.buttonColor} onClick={() => window.scrollTo(0, 1000)}>О нас</HeaderButton>
        <HeaderButton color={theme.buttonColor} onClick={() => window.scrollTo(0, 2900)}>Услуги</HeaderButton>
        <HeaderButton color={theme.buttonColor} onClick={() => window.scrollTo(0, 5000)}>Контакты</HeaderButton>
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header;