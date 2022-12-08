import React from 'react';
import styled from "styled-components";
import { CommonTitle } from "../../common/styled";

export const ContactBlockContainer = styled.div`
  background: bottom/100% no-repeat url('media/contactBackground.svg');
`;

export const Title = styled(CommonTitle)`
  width: fit-content;
  margin: 0 auto;
  text-align: center;
`;

const GoogleMapContainer = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

const StyledIframe = styled.iframe`
  border: 0;
`;

export const GoogleMap = () => {
  return (
    <GoogleMapContainer>
      <StyledIframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.399047494882!2d27.52123191603665!3d53.89481964118709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcffb5fd2abc7%3A0x46f8d62e85fc370c!2z0YPQuy4g0JrQsNGA0LvQsCDQm9C40LHQutC90LXRhdGC0LAgNzHQsCwg0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1670469458486!5m2!1sru!2sby"
        width="800"
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </GoogleMapContainer>
  );
}

export const SocialLinksContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  padding: 20px calc(50% - 150px);
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #FFFCDE;
`;

export const SocialIcon = styled.img`
  margin: auto 0;
  height: 50px;
  width: 50px;
`;