import React from 'react';
import { GalleryBlockContainer, Title, PhotosContainer, Photo } from './styled';

const photos = [0, 1, 2, 3, 4, 5];

const GalleryBlock = () => {

  return (
    <GalleryBlockContainer>
      <Title>Галерея</Title>
      <PhotosContainer>
        {photos.map((photoNum) => {
          const src = `media/gallery${photoNum}.png`;
          return <Photo key={photoNum} src={src}/>;
        })}
      </PhotosContainer>
    </GalleryBlockContainer> 
  );
}

export default GalleryBlock;