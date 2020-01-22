"use strict";

const Navigation = () => {
  return (
    <nav>
      <a href="/home" role="button">My Blog</a>
      <a href="/login" role="button">Login</a>
    </nav>
  )
}

const Card = ({ item, handleSubmit, handleEdit, handleDelete, handleCancel }) => {
  const { editMode, title, content } = item;

  if (editMode) {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type="hidden" name="id" value={item.id} />
          <input type="text" name="title" placeholder="Title" defaultValue={title} />
        </div>
        <div>
          <textarea name="content" placeholder="Content" defaultValue={content}></textarea>
        </div>
        <div>
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    )
  } else {
    return (
      <div>
        <h5>{title || "No Title"}</h5>
        <p class="card-text">{content || "No Content"}</p>
        <button type="button" onClick={handleDelete}>Delete</button>
        <button type="submit" onClick={handleEdit}>Edit</button>
      </div>
    )
  }
}
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const response = await fetch("/posts");
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
    await fetch(`/posts/${postId}`, {
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
      await fetch(`/posts/${data.get("id")}`, {
        method: "PUT",
        headers,
        body,
      });
    } else {
      await fetch("/posts", {
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

        <button type="button" onClick={this.addNewPost}>Add new post</button>
        {
          this.state.data.length > 0 ? (
            this.state.data.map(item => (
              <Card
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
    );
  }
}

ReactDOM.render(
  React.createElement(Admin),
  document.querySelector("#root")
);
