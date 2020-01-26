import React, { Component } from 'react';
import Post from '../home/Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const response = await fetch('http://localhost:3000/posts');
    const data = await response.json();
    data.forEach(item => item.editMode = false);
    this.setState({ data })
  }

  render() {
    return (
      <div>
        {
          this.state.data.length > 0
          ?
          (this.state.data.map(item => <Post item={item} />))
          :
          (<div className="message">There are no posts yet <span role="img" aria-label="sad emoji">&#x1F641;</span>.</div>)
        }

        <div className="message">Please&nbsp;<a href="/admin">log in</a>&nbsp;to create or edit your posts.</div>
    </div>
    );

  }
}

export default Posts;
