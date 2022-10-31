import React, { useState } from 'react';
import styled from 'styled-components';
import {
  StyleSelectorArea,
  StyleName,
  ThumbnailWrapper,
  Thumbnail
} from './StyleSelector';

// //////////////// HELPER FUNCTIONS //////////////// //
// input: styles <- an object with results array containing style objects
// output: an array of first thumbnail urls from each style object
const getThumbnailUrls = (styles) => {
  const { results } = styles;
  return results.map((style) => style.photos[0].thumbnail_url);
};

// //////////////// MAIN COMPONENT //////////////// //
const StyleSelector = (props) => {
  const { styles, style, setStyle } = props;
  const { name } = style;
  const thumbnailUrls = getThumbnailUrls(styles);
  const [styleIndex, setStyleIndex] = useState(0);
  const handleClick = (index) => {
    setStyleIndex(index);
    setStyle(styles.results[index]);
  };

  return (
    <StyleSelectorArea>
      <StyleName>
        {`Selected Style > ${name}`}
      </StyleName>
      <ThumbnailWrapper>
        {thumbnailUrls.map((thumbnailUrl, index) => (index === styleIndex ? (
          <Thumbnail key={index} selected src={thumbnailUrl} loading="lazy" onClick={() => handleClick(index)} />
        ) : (
          <Thumbnail key={index} src={thumbnailUrl} loading="lazy" onClick={() => handleClick(index)} />
        )))}
      </ThumbnailWrapper>
    </StyleSelectorArea>
  );
};

export default StyleSelector;
