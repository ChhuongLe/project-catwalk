import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-areas: "ImageGallery ProductInfo"
                       "ImageGallery Description"
                       "ImageGallery StyleSelector"
                       "ImageGallery AddToCart";
  grid-template-columns: 5fr 2fr;
  grid-template-rows: auto auto auto auto;
  grid-gap: 3em;
  min-height: 70vh;
  max-width: 80vw;
  padding: 2rem;
  margin: auto;
`;