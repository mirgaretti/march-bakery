import React from 'react';
import styled from "styled-components";
import { CommonText, CommonTitle } from '../../common/styled';

export const Slider = styled.div`
  display: flex;
  width: 302%;
  overflow-x: hidden;
  transition-property: margin-left;
  transition-duration: 2s;
  margin-left: -${(props) => props.sliderPage * 100 + 0.5}%;
`;

export const SliderContainer = styled.div`
  position: relative;
  padding: 240px 240px 0;
  background-position: ${(props) => props.theme.backgroundPosition};
  background-repeat: no-repeat;
  background-image: url('${(props) => props.theme.backgroundImage}');
`;

export const Title = styled(CommonTitle)`
  margin: 0 0 30px 220px;
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const Text = styled(CommonText)`
  margin: 0 100px 0 220px;
`;

const MainImageContainer = styled.div`
`;

const MainImage = styled.img`
  height: ${(props) => props.height};
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};
`;

const ArrowImage = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: calc(${(props) => (props.sliderPage - props.currentPage) * 100.5}% + ${(props) => props.left});
  transition-property: left;
  transition-duration: 2s;
`;

export const SliderImage = (props) => {
  const { currentPage, sliderPage, mainImage } = props;
  return (
    <MainImageContainer>
      <MainImage src={mainImage.src} height={mainImage.height} left={mainImage.left} top={mainImage.top}/>
      {mainImage.arrows.map((arrow) => <ArrowImage currentPage={currentPage} sliderPage={sliderPage} key={arrow.src} src={arrow.src} top={arrow.top} left={arrow.left}/>)}
    </MainImageContainer>
  )
};

const ArrowBorder = styled.div`
  position: absolute;
  clip-path: ${(props) => props.left ? 'polygon(0 50%, 100% 100%, 100% 0)' : 'polygon(0 0, 0% 100%, 100% 50%)'};
  background-color: ${(props) => props.color};
  padding: 1px;
  height: 60px;
  width: 60px;
  left: ${(props) => props.left ? '20px' : 'calc(100% - 90px)'};
  top: 540px;
`;

const ArrowBackground = styled.div`
  clip-path: inherit;
  background-color: #FFFFFF;
  height: 60px;
  width: 60px;
`;

export const Arrow = (props) => {
  const { left, color, onClick } = props;
  return (
    <ArrowBorder onClick={onClick} left={left} color={color}>
      <ArrowBackground />
    </ArrowBorder>
  );
}