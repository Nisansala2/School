// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <h3 className='top'>The Place where life is built without bring limited to knoweldge</h3>
      <img src='/images/logo.jpg'alt="School Logo" style={{ height: '50px' }} />
      <h1>Athapattukanda Collage</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/acadamic">Acadamic</a></li>
          <li><a href="/Administration">Administration</a></li>
          <li><a href="/contact">Contact</a></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
