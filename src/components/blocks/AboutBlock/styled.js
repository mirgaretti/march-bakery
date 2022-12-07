import React from 'react';
import styled from 'styled-components';
import { CommonText, CommonTitle } from '../../common/styled';

export const AboutContainer = styled.div`
  background: top right no-repeat url('media/aboutBackground0.svg'), bottom left no-repeat url('media/aboutBackground1.svg');
`;

export const InfoContainer = styled.div`
  display: flex;
  margin: 200px 50px;
  ${(props) => props.right && 'flex-direction: row-reverse;'}
`;

export const Title = styled(CommonTitle)`
  margin: 0 200px 0 ${(props) => props.bottom ? '100px' : '45px'};
`;

export const TitleColor = styled.span`
  color: #FFBACB;
`;

export const Text = styled(CommonText)`
  margin: 50px 200px 0 ${(props) => props.bottom ? '100px' : '45px'};
`;

const Background = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 0 0 155px;
  background-color: ${(props) => props.color};
  ${(props) => props.girl ? 'padding: 32px 64px 0 0;' : 'padding: 100px 80px;'}
  box-sizing: border-box;
`;

const GirlImage = styled.img`
  margin-bottom: -80px;
  margin-left: -50px;
  height: 430px;
  min-width: 400px;
  margin: 0 0 0 -64px;
`;

const CakeImage = styled.img`
  width: 235px;
  flex: 1 auto; 
`;

export const GirlImageBox = () => {
  return (
    <Background girl color='#FCF6BD'>
      <GirlImage src='media/girl.png' />
    </Background>
  );
}

export const CakeImageBox = () => {
  return (
    <Background color='#FABFFF'>
      <CakeImage src='media/cake.png' />
    </Background>
  );
}