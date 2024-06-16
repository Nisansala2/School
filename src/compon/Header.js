// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    
    
    <header>
        <h3 className='top' >The Place where life is built without bring limited to knoweldge</h3>
          <div className='header'>
            <div className='top-image'>
        <img src='/images/logo.jpg'alt="School Logo" style={{ height: '100px' } } className='logo'/>
        </div>
        <h1 className='top-name'>Athapattukanda Collage</h1>
        
       <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'><a href="/">Home</a></li>
          <li className='nav-item'><a href="/about">About</a></li>
          <li className='nav-item'><a href="/acadamic">Acadamic</a></li>
          <li className='nav-item'><a href="/Administration">Administration</a></li>
          <li className='nav-item'><a href="/contact">Contact</a></li>
          </ul>
      </nav>
      </div>
    </header>
  
  );
}

export default Header;
