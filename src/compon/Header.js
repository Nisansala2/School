// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    
    
    <header >
        
          <div className='header'>
            <div className='top-image'>
        <img src='/images/logo.jpg'alt="School Logo" style={{ height: '70px' } } className='logo'/>
        </div>
        <h1 className='top-name'>Athapaththkanda Collage</h1>
        
        
       <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'><a href="/">Home</a></li>
          <li className='nav-item'><a href="/about">About</a></li>
          <li className='nav-item'><a href="/acadamic">Acadamic</a></li>
          <li className='nav-item'><a href="/Administraion">Administration</a></li>
          <li className='nav-item'><a href="/contact">Contact</a></li>
          <li className='nav-item'><a href="/Achivments">Achievements</a></li>
          </ul>
      </nav>
      </div>
    </header>
  
  );
}

export default Header;
