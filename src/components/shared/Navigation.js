import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav">
      <a href="/" role="button">Home</a>
      <a href="/blog" role="button">Blog</a>
      <a href="/gallery" role="button">Gallery</a>
      <a href="/contacts" role="button">Contacts</a>
      <a href="/admin" role="button">Admin</a>
    </nav>
  )
}

export default Navigation;
