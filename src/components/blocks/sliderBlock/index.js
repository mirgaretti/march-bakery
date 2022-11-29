import React, { useState } from 'react';
import Header from '../../header';
import { theme, SliderContainer, Title, SliderImage } from './styled';

const SliderBlock = () => {
  const [ sliderPage, setSliderPage ] = useState(0);

  return (
    <>
      <Header theme={theme[sliderPage]} sliderPage={sliderPage}/>
      <SliderContainer theme={theme[sliderPage]}>
        <Title color={theme[sliderPage].mainColor}>Тортики для небольших посиделок</Title>
        <SliderImage mainImage={theme[sliderPage].mainImage} arrows={theme[sliderPage].arrows}/>
      </SliderContainer>
    </>
  );
}

export default SliderBlock;
