import React from 'react';

const PostAdmin = ({ item, handleSubmit, handleEdit, handleDelete, handleCancel }) => {
  const { editMode, title, content } = item;
  
  if (editMode) {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type="hidden" name="id" value={item.id} />
          <input type="text" name="title" placeholder="Title" defaultValue={title} className="title" />
        </div>
        <div>
          <textarea name="content" placeholder="Content" defaultValue={content} className="content"></textarea>
        </div>
        <div>
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    )
  } else {
    return (
      <div class="card">
        <h5 class="card-title">{title || "No Title"}</h5>
        <p class="card-text">{content || "No Content"}</p>
        <button type="button" onClick={handleDelete}>Delete</button>
        <button type="submit" onClick={handleEdit}>Edit</button>
      </div>
    )
  }
}

export default PostAdmin;