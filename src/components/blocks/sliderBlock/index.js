import React, { useState } from 'react';
import Header from '../../header';
import { SliderContainer, Title, ContentContainer, Text, SliderImage } from './styled';

export const theme = [
  {
    buttonColor: '#FFFFFF',
    mainColor: '#88001B',
    backgroundImage: 'media/sliderBackground0.svg',
    title: 'Тортики для небольших посиделок',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a diam porta, suscipit arcu ut, blandit libero. Curabitur finibus, lorem sed bibendum faucibus, dui libero dapibus nibh, eu varius massa justo ut sem. Praesent sed egestas neque. Vestibulum nec diam in nulla tempus tristique.`,
    mainImage: {
      src: 'media/sliderImage0.png',
      height: '470px',
      left: '0',
      arrows: [
        {
          src: 'media/slider0Arrow0.svg',
          top: '310px',
          left: '140px',
        },
        {
          src: 'media/slider0Arrow1.svg',
          top: '630px',
          left: '620px',
        },
      ]
    },
  },
  {
    buttonColor: '#F3722C',
    mainColor: '#BC3908',
    backgroundImage: 'sliderBackground1.svg',
    title: 'Тортики для семьи',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a diam porta, suscipit arcu ut, blandit libero. Curabitur finibus, lorem sed bibendum faucibus, dui libero dapibus nibh, eu varius massa justo ut sem. Praesent sed egestas neque. Vestibulum nec diam in nulla tempus tristique.`,
    mainImage: {
      src: 'media/sliderImage0.png',
      height: '433px',
      left: '177px',
      arrows: [
        {
          src: 'media/slider1Arrow0.svg',
          top: '310px',
          left: '70px',
        },
        {
          src: 'media/slider1Arrow1.svg',
          top: '630px',
          left: '550px',
        },
      ]
    },
  },
  {
    buttonColor: '#9800AB',
    mainColor: '#6F0177',
    backgroundImage: 'sliderBackground2.svg',
    mainImage: 'sliderImage2.png',
  },
];

const SliderBlock = () => {
  const [ sliderPage, setSliderPage ] = useState(0);

  return (
    <>
      <Header theme={theme[sliderPage]} sliderPage={sliderPage}/>
      <SliderContainer theme={theme[sliderPage]}>
        <Title color={theme[sliderPage].mainColor}>{theme[sliderPage]?.title}</Title>
        <ContentContainer>
          <SliderImage mainImage={theme[sliderPage].mainImage}/>
          <Text color={theme[sliderPage].mainColor}>{theme[sliderPage]?.text}</Text>
        </ContentContainer>
      </SliderContainer>
    </>
  );
}

export default SliderBlock;
