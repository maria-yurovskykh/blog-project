import React from 'react';
import './App.css';

import GoogleMap from './components/GoogleMap';
import Banner from './components/Banner';

const Navigation = () => {
  return (
    <nav className="nav">
      <a href="/home" role="button">Home</a>
      <a href="/blog" role="button">My blog</a>
      <a href="/ptotos" role="button">My photo</a>
      <a href="/contacts" role="button">Contact me</a>
      <a href="/login" role="button">Login</a>
    </nav>
  )
}

const Card = ({ item }) => {
  const { title, content } = item;

  return (
    <div className="post">
      <h5>{ title || "No Title" }</h5>
      <p>{ content || "No Content" }</p>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <p>CorgiRight 2020</p>
    </footer>
  )
}

class App extends React.Component {
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
        <Banner />
        
        {
          this.state.data.length > 0
          ?
          (this.state.data.map(item => <Card item={item} />))
          :
          (<div className="message">There are no posts yet <span role="img" aria-label="sad emoji">&#x1F641;</span>.</div>)
        }

        <div className="message">Please&nbsp;<a href="/login">log in</a>&nbsp;to create or edit your posts.</div>

        <GoogleMap />
        <Footer />
      </div>
    );
  }
}

export default App;
