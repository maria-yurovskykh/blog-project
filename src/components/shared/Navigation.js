import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav">
      <a href="/" role="button">Home</a>
      <a href="/blog" role="button">My blog</a>
      <a href="/photo" role="button">My photo</a>
      <a href="/contacts" role="button">Contact me</a>
      <a href="/admin" role="button">Admin</a>
    </nav>
  )
}

export default Navigation;
