import React, {Component} from 'react';
import BreadCrumbs from './shared/BreadCrumbs';
import Slider from './home/Slider';

class PhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'gallery',
      images: [
        {src: './photo4.jpg', alt: 'photo4'},
        {src: './photo5.jpg', alt: 'photo5'},
        {src: './photo6.jpg', alt: 'photo6'},
        {src: './photo7.jpg', alt: 'photo7'},
        {src: './photo8.jpg', alt: 'photo8'},
        {src: './photo9.jpg', alt: 'photo9'},
      ]
    };
  }

  render() {
    return (
      <div>
        <BreadCrumbs category={this.state.category} />
        <Slider images={this.state.images} showStatus={false} />
      </div>
    )
  }
}

export default PhotoPage;
