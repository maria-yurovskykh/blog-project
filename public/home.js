"use strict";

const Navigation = () => {
  return (
    <nav>
      <a href="/home" role="button">My Blog</a>
      <a href="/login" role="button">Login</a>
    </nav>
  )
}

const Card = ({ item }) => {
  const { title, content } = item;

  return (
    <div Style="width: 100%;">
      <h5>{ title || "No Title" }</h5>
      <p>{ content || "No Content" }</p>
    </div>
  )
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const response = await fetch('/posts');
    const data = await response.json();
    data.forEach(item => item.editMode = false);
    this.setState({ data })
  }

  render() {
    return (
      <div>
        <Navigation />

        {
          this.state.data.length > 0
          ?
          (this.state.data.map(item => <Card item={item} />))
          :
          (<div>There are no posts yet...</div>)
        }

        <div>Please press "Login" to create or edit your posts.</div>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(Home),
  document.querySelector('#root')
);
