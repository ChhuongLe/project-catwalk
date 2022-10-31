import React from 'react';
import styled from 'styled-components';
import logo from './adidas.png';

const RowContainer = styled.div`
    display: flex;
    place-self: center;
    position: relative;
    flex-direction: row;
    align-items: center;
`;

const Image = styled.img`
  justify-content: center;
  max-height: 250px;
  max-width: 250px;
  padding: 10px;
`;

const Banner = () => (
  <RowContainer>
    <Image src={logo} alt="nothin here" aria-label="banner" />
  </RowContainer>
);

export default Banner;
