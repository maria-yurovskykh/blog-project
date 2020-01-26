import React from 'react';

const PostAdmin = ({ item, handleSubmit, handleEdit, handleDelete, handleCancel }) => {
  const { editMode, title, date, content } = item;

  if (editMode) {
    return (
      <form className="admin-form" onSubmit={handleSubmit}>
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
      <div className="card">
        <h5 className="card-title">{title || "No Title"}</h5>
        <p className="card-date">{date}</p>
        <p className="card-text">{content || "No Content"}</p>
        <button type="button" onClick={handleDelete}>Delete</button>
        <button type="submit" onClick={handleEdit}>Edit</button>
      </div>
    )
  }
}

export default PostAdmin;
