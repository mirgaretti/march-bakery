import React from 'react';
import { Logo, HeaderButton, HeaderContainer } from './styled';

const Header = (props) => {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderButton>Главная</HeaderButton>
      <HeaderButton>О нас</HeaderButton>
      <HeaderButton>Услуги</HeaderButton>
      <HeaderButton>Контакты</HeaderButton>
    </HeaderContainer>
  );
}

export default Header;