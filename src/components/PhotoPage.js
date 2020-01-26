import React, {Component} from 'react';
import BreadCrumbs from './shared/BreadCrumbs';

class PhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'gallery'
    };
  }

  render() {
    return (
      <div>
        <BreadCrumbs category={this.state.category} />
      </div>
    )
  }
}

export default PhotoPage;
