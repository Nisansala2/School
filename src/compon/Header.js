// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <h2 className='top'>Green School concept</h2>
      <img src='/images/logo.jpg'alt="School Logo" style={{ height: '50px' }} />
      <h1>Athapattukanda Vidyalaya Matara</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/acadamic">Acadamic</a></li>
          <li><a href="/contact">Contact</a></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
