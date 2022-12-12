import React, { useState } from 'react';
import AboutBLock from './components/blocks/AboutBlock';
import AdvantageBlock from './components/blocks/AdvantageBlock';
import OrderBLock from './components/blocks/OrderBlock';
import SliderBlock from './components/blocks/sliderBlock';
import GalleryBlock from './components/blocks/GalleryBlock';
import ContactBlock from './components/blocks/ContactBlock';
import Form from './components/form';

const App = () => {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [formOption, setFormOption] = useState({});

  const handleOrderClick = (option) => {
    setIsFormOpened(true);
    setFormOption(option);
  }

  return (
    <>
      <SliderBlock handleOrderClick={handleOrderClick}/>
      <AboutBLock />
      <AdvantageBlock />
      <OrderBLock handleClick={handleOrderClick} />
      <GalleryBlock />
      <ContactBlock />
      {isFormOpened && <Form setIsFormOpened={setIsFormOpened} option={formOption} />}
    </>
  );
}
export default App;