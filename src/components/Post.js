import React from 'react';

const Post = ({ item }) => {
  const { title, content } = item;

  return (
    <div className="post">
      <h5>{ title || "No Title" }</h5>
      <p>{ content || "No Content" }</p>
    </div>
  )
}

export default Post;