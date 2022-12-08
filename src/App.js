import React from 'react';
import AboutBLock from './components/blocks/AboutBlock';
import AdvantageBlock from './components/blocks/AdvantageBlock';
import OrderBLock from './components/blocks/OrderBlock';
import SliderBlock from './components/blocks/sliderBlock';
import GalleryBlock from './components/blocks/GalleryBlock';
import ContactBlock from './components/blocks/ContactBlock';

const App = () => {
  return (
    <>
      <SliderBlock />
      <AboutBLock />
      <AdvantageBlock />
      <OrderBLock />
      <GalleryBlock />
      <ContactBlock /> 
    </>
  );
}
export default App;