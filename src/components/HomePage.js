import React, { Component } from 'react';
import BreadCrumbs from './shared/BreadCrumbs';
import Slider from './home/Slider'
import Posts from './shared/Posts';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'home',
      images: [
        {src: './photo1.jpg', alt: 'photo1'},
        {src: './photo2.jpg', alt: 'photo2'},
        {src: './photo3.jpg', alt: 'photo3'}
      ]
    };
  }

  render() {
    return (
      <div>
        <BreadCrumbs category={this.state.category} />
        <Slider
          images={this.state.images}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
        />
        <Posts />
      </div>
    );
  }
}


export default HomePage;
