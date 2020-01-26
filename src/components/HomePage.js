import React, { Component } from 'react';
import BreadCrumbs from './shared/BreadCrumbs';
import Slider from './home/Slider'
import Posts from './shared/Posts';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'home'
    };
  }

  render() {
    return (
      <div>
        <BreadCrumbs category={this.state.category} />
        <Slider />
        <Posts />
      </div>
    );
  }
}


export default HomePage;
