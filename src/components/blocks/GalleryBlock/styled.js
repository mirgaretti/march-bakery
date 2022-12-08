import styled from "styled-components";
import { CommonTitle } from "../../common/styled";

export const GalleryBlockContainer = styled.div`
  background: top left no-repeat url('media/galleryBackground0.svg'), bottom right no-repeat url('media/galleryBackground1.svg');
`;

export const Title = styled(CommonTitle)`
  width: fit-content;
  margin: 0 auto;
  text-align: center;
`;

export const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 55%;
  justify-content: space-between;
  margin: 100px auto;
`;

export const Photo = styled.img`
  width: 30%;
  margin: 1%;
`;