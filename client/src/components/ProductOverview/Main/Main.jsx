import React, { useState } from 'react';
import ProductInfo from '../ProductInfo';
import StyleSelector from '../StyleSelector/StyleSelector.jsx';
import AddToCart from '../AddToCart';
import Description from '../Description';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Grid } from './MainElements';



const ProductOverview = (props) => {
  const { product, styles, cart, rating, totalReviews } = props;
  const [style, setStyle] = useState(styles.results[0]);

  return (
    <Grid>
      <ImageGallery style={style} />
      <ProductInfo product={product} style={style} rating={rating} totalReviews={totalReviews} />
      <StyleSelector styles={styles} style={style} setStyle={setStyle} />
      <AddToCart style={style} />
      <Description product={product} />
    </Grid>
  );
};

export default ProductOverview;
