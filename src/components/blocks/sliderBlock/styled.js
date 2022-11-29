import React from 'react';
import styled from "styled-components";

export const theme = [
  {
    buttonColor: '#FFFFFF',
    mainColor: '#88001B',
    backgroundImage: 'media/sliderBackground0.svg',
    mainImage: {
      src: 'media/sliderImage0.png',
      height: '470px',
      left: '173px',
    },
    arrows: [
      {
        src: 'media/sliderArrow00.svg',
        top: '-300px',
        left: '-450px',
      },
      {
        src: 'media/sliderArrow01.svg',
        top: '-50px',
        left: '-40px',
      },
    ]
  },
  {
    buttonColor: '#F3722C',
    mainColor: '#BC3908',
    backgroundImage: 'sliderBackground1.svg',
    mainImage: 'sliderImage1.png',
  },
  {
    buttonColor: '#9800AB',
    mainColor: '#6F0177',
    backgroundImage: 'sliderBackground2.svg',
    mainImage: 'sliderImage2.png',
  },
];

export const SliderContainer = styled.div`
  padding: 240px 0 0;
  background-position: top right;
  background-repeat: no-repeat;
  background-image: url('${(props) => props.theme.backgroundImage}');
`;

export const Title = styled.h1`
  margin: 0 0 0 220px;
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 85px;

  color: ${(props) => props.color};
`;

const MainImageContainer = styled.div``;

const MainImage = styled.img`
  height: ${(props) => props.height};
  margin-left: ${(props) => props.left};
`;

const ArrowImage = styled.img`
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const SliderImage = (props) => {
  const { mainImage, arrows } = props;
  return (
    <MainImageContainer>
      <MainImage src={mainImage.src} height={mainImage.height} left={mainImage.left}/>
      {arrows.map((arrow) => <ArrowImage key={arrow.src} src={arrow.src} top={arrow.top} left={arrow.left}/>)}
    </MainImageContainer>
  )
};