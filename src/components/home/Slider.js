import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Slider extends Component {
  render() {
    return (
      <Carousel
        showThumbs={this.props.showThumbs}
        showStatus={this.props.showStatus}
        autoPlay={this.props.autoPlay}
        infiniteLoop={this.props.infiniteLoop}
      >
        {
          this.props.images.map((item, i) => {
            return (
              <div key={i}>
                <img src={item.src} alt={item.alt} key={i} />
              </div>
            );
          })
        }
      </Carousel>
    );
  }
};

export default Slider;
