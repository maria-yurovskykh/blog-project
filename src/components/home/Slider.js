import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Slider extends Component {
  render() {
    return (
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <img src="./photo1.jpg" alt="alt"/>
        </div>
        <div>
          <img src="./photo2.jpg" alt="alt"/>
        </div>
        <div>
          <img src="./photo3.jpg" alt="alt"/>
        </div>
      </Carousel>
    );
  }
};

export default Slider;
