import React from 'react';
import AboutBLock from './components/blocks/AboutBlock';
import SliderBlock from './components/blocks/sliderBlock';

const App = () => {
  return (
    <>
      <SliderBlock />
      <AboutBLock />
      {/* 
      <AdvantageBlock />
      <OrderBLock />
      <GalleryBlock />
      <ContactBlock /> 
      */}
    </>
  );
}
export default App;