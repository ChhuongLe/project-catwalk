import styled from 'styled-components';

// //////////////// ASSIGNED GRID AREA //////////////// //
export const StyleSelectorArea = styled.div`
  grid-area: StyleSelector;
`;

// //////////////// STYLED COMPONENTS //////////////// //
export const StyleName = styled.div`
  font-size: 15px;
`;

export const ThumbnailWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid;
  border-color: ${(props) => (props.selected ? '#FF5A5F' : '#ddd')};
  border-radius: 50%;
  padding: 3px;
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    border-color: #FF5A5F;
  }
`;