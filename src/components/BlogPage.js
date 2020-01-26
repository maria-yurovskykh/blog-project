import React, {Component} from 'react';
import BreadCrumbs from './shared/BreadCrumbs';
import Posts from './shared/Posts';

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'blog'
    };
  }

  render() {
    return (
      <div>
        <BreadCrumbs category={this.state.category} />
        <Posts />
      </div>
    )
  }
}

export default BlogPage;
