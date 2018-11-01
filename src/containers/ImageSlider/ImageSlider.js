import React from 'react';
import Carousel from 'react-image-carousel';

import classes from './ImageSlider.css';
import slide1 from '../../assets/images/slider1.jpg';
import slide2 from '../../assets/images/slider2.jpg';
import slide3 from '../../assets/images/slider3.jpg';

let images = [
    slide1,
    slide2,
    slide3,
];

const Slider = () => (
  <div className={classes.Slider}>
    <Carousel
      images={images}
      thumb={true}
      loop={true}
      showArrows={true}
      autoplay={3000}/>
  </div>
);

export default Slider;
