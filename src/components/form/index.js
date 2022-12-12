import React, { useState } from 'react';
import { FormContainer, FormContent, FormTitle, InputContainer, Label, Input, Button, CrossButton } from './styled';


const Form = (props) => {

  const { option, setIsFormOpened } = props;
  const [isCorrectAll, setIsCorrectAll] = useState(true);
  const [isCorrect, setIsCorrect] = useState({
    name: true,
    address: true,
    phone: true,
  });
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const formFields = {
    name: {
      label: 'Ваше имя',
    },
    address: {
      label: 'Адрес',
    },
    phone: {
      label: 'Ваш мобильный телефон',
    }
  };

  const handleChange = (e, key) => {
    const newData = Object.assign({}, formData);
    newData[key] = e.target.value;
    const isCorrectNew = isCorrect;
    isCorrectNew[key] = true;
    setFormData(newData);
    setIsCorrect(isCorrectNew);
  };

  const handleClick = () => {
    let isCorrectAllNew = isCorrectAll;
    const isCorrectNew = Object.assign({}, isCorrect);
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        isCorrectNew[key] = false;
        isCorrectAllNew = false;
        return;
      }
      if (key === 'phone' && !/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/.test(value)) {
        isCorrectNew[key] = false;
        isCorrectAllNew = false;
        return;
      }
    });
    if (isCorrectAllNew) {
      alert('Заказ отправлен!');
      setIsFormOpened(false);
    }
  };

  return (
    <FormContainer>
      <FormContent>
        <CrossButton src='media/cross.svg' onClick={() => setIsFormOpened(false)} />
        <FormTitle>{option.title}</FormTitle>
        {Object.entries(formFields).map(([key, value]) => {
          return (
            <InputContainer key={key}>
              <Label>{value.label}</Label>
              <Input onChange={(e) => {handleChange(e, key)}} />
            </InputContainer>
          );
        })}
        <Button color={option.color} onClick={handleClick}>Заказать</Button>
      </FormContent>
    </FormContainer>
  );
};

export default Form;