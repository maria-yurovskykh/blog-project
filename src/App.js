import React from 'react';

// components
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
// import Post from './components/Post';
import PostAdmin from './components/PostAdmin';
// import MapContainer from './components/MapContainer';


// styling
import './App.css';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { data: [] };
//   }

//   componentDidMount() {
//     this.getPosts();
//   }

//   getPosts = async () => {
//     const response = await fetch('http://localhost:3000/posts');
//     const data = await response.json();
//     data.forEach(item => item.editMode = false);
//     this.setState({ data })
//   }

//   render() {
//     return (
//       <div>
//         <Navigation />
//         <Banner />
        
//         {
//           this.state.data.length > 0
//           ?
//           (this.state.data.map(item => <Card item={item} />))
//           :
//           (<div className="message">There are no posts yet <span role="img" aria-label="sad emoji">&#x1F641;</span>.</div>)
//         }

//         <div className="message">Please&nbsp;<a href="/login">log in</a>&nbsp;to create or edit your posts.</div>

//         <Footer />
//         <MapContainer />
//       </div>
//     );
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    data.forEach(item => item.editMode = false);
    this.setState({ data });
  }

  addNewPost = () => {
    const data = this.state.data;
    if (data.length === 0 || data[0].editMode === false) {
      data.unshift({
        editMode: true,
        title: "",
        content: ""
      })
      this.setState({ data });
    }
  }

  handleCancel = async () => {
    await this.getPosts();
  }

  handleEdit = (postId) => {
    const data = this.state.data.map((item) => {
      if (item.id === postId) {
        item.editMode = true;
      }
      return item;
    });
    this.setState({ data });
  }

  handleDelete = async (postId) => {
    await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    await this.getPosts();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const body = JSON.stringify({
      title: data.get("title"),
      content: data.get("content"),
    });

    const headers = {
      "content-type": "application/json",
      accept: "application/json",
    };

    if (data.get("id")) {
      await fetch(`http://localhost:3000/posts/${data.get("id")}`, {
        method: "PUT",
        headers,
        body,
      });
    } else {
      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers,
        body,
      });
    }
    await this.getPosts();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Banner />
        <div className="container">
          <button type="button" onClick={this.addNewPost} className="add__button">Add new post</button>
          {
            this.state.data.length > 0 ? (
              this.state.data.map(item => (
                <PostAdmin
                  item={item}
                  handleSubmit={this.handleSubmit}
                  handleEdit={this.handleEdit.bind(this, item.id)}
                  handleDelete={this.handleDelete.bind(this, item.id)}
                  handleCancel={this.handleCancel}
                />
              ))
            )
            :
            (<div>You don't have any posts. Use the "Add New Post" button to add some posts!</div>)
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;