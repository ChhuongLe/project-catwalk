import styled from 'styled-components';

// /////////////// ASSIGNED GRID AREA //////////////// //
export const ImageGalleryArea = styled.div`
  position: relative;
  grid-area: ImageGallery;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  height: 100%;
`;

// //////////////// STYLED COMPONENTS //////////////// //
export const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  margin-top: 30px;
  margin-right: 30px;
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 65px;
  border: 2px solid;
  object-fit: cover;
  border-color: ${(props) => (props.selected ? '#FF5A5F' : '#ddd')};
  border-radius: 7%;
  padding: 3px;
  margin: 2px;
  cursor: pointer;
  &:hover {
    border-color: #FF5A5F;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  align-self: stretch;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    opacity: 0.8;
    cursor: zoom-in;
  }
`;

export const Modal = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`;

export const ModalImage = styled.img`
  position: relative;
  background-color: white;
  margin: auto;
  width: 85%;
`;