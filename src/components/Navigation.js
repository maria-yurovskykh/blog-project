import React from 'react';

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

export default Navigation;