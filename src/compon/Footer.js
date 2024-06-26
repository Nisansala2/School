// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div class="fcontainer">
            <div class="footer-section logo-section">
                 <img src='/images/logo.jpg'alt="School Logo" style={{ height: '80px' } } className='logo'/>
                <h3>Athapaththukanda Vidyalaya</h3>
                <p>Middle School</p>
            </div>
            <div class="footer-section quick-navigation">
                <h3>Quick Navigation</h3>
              <nav className='footy'> 
        <ul className='nav-foot'>
          <li className='nav-pre'><a href="/">Home</a></li>
          <li className='pre'><a href="/about">About</a></li>
          <li className='pre'><a href="/acadamic">Acadamic</a></li>
          <li className='pre'><a href="/Administraion">Administration</a></li>
          <li className='pre'><a href="/contact">Contact</a></li>
          <li className='pre'><a href="/Achivments">Archivements</a></li>
          </ul>
          </nav> 
      
            </div>
            <div class="footer-section stay-connected">
                <h3>Stay Connected</h3>
                <ul>
                    <li>Facebook - Athapaththukanda K.V</li>
                    <li>Youtube - Athapaththukanda</li>
                    <a href="athapaththukandakv@gmail.com">athapaththukandakv@gmail.com"</a>
                </ul>
            </div>
            <div class="footer-section get-in-touch">
                <h3>Address</h3>
                <address>
                    MR/Athapattukanda Vidyalaya<br/>
                    Athapaththukanda<br/>
                    Deiyandra<br/>
                    Matara
                    
                    </address>
            </div>
        </div>
        
      
      
    </footer>
  );
}


export default Footer;
