import React, { useState } from 'react';
import Header from '../../header';
import { SliderContainer, Slider, Title, ContentContainer, Text, SliderImage, Arrow } from './styled';

export const theme = [
  {
    buttonColor: '#FFFFFF',
    mainColor: '#88001B',
    backgroundImage: 'media/sliderBackground0.svg',
    backgroundPosition: 'top right',
    title: 'Тортики для небольших посиделок',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a diam porta, suscipit arcu ut, blandit libero. Curabitur finibus, lorem sed bibendum faucibus, dui libero dapibus nibh, eu varius massa justo ut sem. Praesent sed egestas neque. Vestibulum nec diam in nulla tempus tristique.`,
    mainImage: {
      src: 'media/sliderImage0.png',
      height: '470px',
      left: '0',
      top: '0',
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
    backgroundImage: 'media/sliderBackground1.svg',
    backgroundPosition: 'top left',
    title: 'Тортики для семьи',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a diam porta, suscipit arcu ut, blandit libero. Curabitur finibus, lorem sed bibendum faucibus, dui libero dapibus nibh, eu varius massa justo ut sem. Praesent sed egestas neque. Vestibulum nec diam in nulla tempus tristique.`,
    mainImage: {
      src: 'media/sliderImage1.png',
      height: '350px',
      left: '0',
      top: '50px',
      arrows: [
        {
          src: 'media/slider1arrow0.svg',
          top: '310px',
          left: '140px',
        },
        {
          src: 'media/slider1arrow1.svg',
          top: '630px',
          left: '590px',
        },
      ]
    },
  },
  {
    buttonColor: '#9800AB',
    mainColor: '#6F0177',
    backgroundImage: 'media/sliderBackground2.svg',
    backgroundPosition: 'top left',
    title: 'Тортики для семьи',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a diam porta, suscipit arcu ut, blandit libero. Curabitur finibus, lorem sed bibendum faucibus, dui libero dapibus nibh, eu varius massa justo ut sem. Praesent sed egestas neque. Vestibulum nec diam in nulla tempus tristique.`,
    mainImage: {
      src: 'media/sliderImage2.png',
      height: '350px',
      left: '0',
      top: '50px',
      arrows: [
        {
          src: 'media/slider2arrow0.svg',
          top: '225px',
          left: '150px',
        },
        {
          src: 'media/slider2arrow1.svg',
          top: '550px',
          left: '660px',
        },
      ]
    },
  },
];

const SliderBlock = () => {
  const [ currentPage, setCurrentPage ] = useState(0);

  const handleLeftClick = () => setCurrentPage((currentPage - 1) === -1 ? 0 : (currentPage - 1));
  const handleRightClick = () => setCurrentPage((currentPage + 1) === 3 ? 2 : (currentPage + 1));

  return (
    <>
      <Header theme={theme[currentPage]} sliderPage={currentPage} setSliderPage={setCurrentPage}/>
      <Slider sliderPage={currentPage}>
        {[0, 1, 2].map((sliderPage) => 
          <SliderContainer theme={theme[sliderPage]}>
            <Arrow onClick={handleLeftClick} left color={theme[currentPage].mainColor}/>
            <Title color={theme[sliderPage].mainColor}>{theme[sliderPage]?.title}</Title>
            <ContentContainer>
              <SliderImage currentPage={currentPage} sliderPage={sliderPage} mainImage={theme[sliderPage].mainImage}/>
              <Text color={theme[sliderPage].mainColor}>{theme[sliderPage]?.text}</Text>
            </ContentContainer>
            <Arrow onClick={handleRightClick} right color={theme[currentPage].mainColor}/>
          </SliderContainer>
        )}
      </Slider>
    </>
  );
}

export default SliderBlock;
