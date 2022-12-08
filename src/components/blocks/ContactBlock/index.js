import React from 'react';
import { ContactBlockContainer, Title, GoogleMap, SocialLinksContainer, SocialIcon } from './styled';

const ContactBlock = () => {

  return (
    <ContactBlockContainer>
      <Title>Контакты</Title>
      <GoogleMap />
      <SocialLinksContainer>
        <SocialIcon src='media/vk.svg'></SocialIcon>
        <SocialIcon src='media/ig.svg'></SocialIcon>
        <SocialIcon src='media/tt.svg' tt></SocialIcon>
      </SocialLinksContainer>
    </ContactBlockContainer>
  );
}

export default ContactBlock;