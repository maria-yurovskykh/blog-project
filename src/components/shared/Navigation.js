import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav">
      <label htmlFor="menu" className="menu-label">Menu</label>
      <input type="checkbox" name="menu" id="menu" className="menu"></input>
      <div className="nav-buttons">
        <a href="/" role="button">Home</a>
        <a href="/blog" role="button">Blog</a>
        <a href="/gallery" role="button">Gallery</a>
        <a href="/contacts" role="button">Contacts</a>
        <a href="/admin" role="button">Admin</a>
      </div>
    </nav>
  )
}

export default Navigation;
