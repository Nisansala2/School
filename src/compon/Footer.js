// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div class="fcontainer">
            <div class="footer-section logo-section">
                 <img src='/images/logo.jpg'alt="School Logo" style={{ height: '100px' } } className='logo'/>
                <h2>Ridgeview</h2>
                <p>Middle School</p>
            </div>
            <div class="footer-section quick-navigation">
                <h3>Quick Navigation</h3>
                <ul>
                    <li>About   News</li>
                    <li>Academics  Events</li>
                    <li>Students</li>
                    <li>Parents</li>
                    <li>Admissions</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="footer-section stay-connected">
                <h3>Stay Connected</h3>
                <ul>
                    <li>Facebook - Athapattukanda K.V</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </div>
            <div class="footer-section get-in-touch">
                <h3>Get in Touch</h3>
                <address>
                    500 Terry Francine Street<br/>
                    San Francisco, CA 94158<br/>
                    Tel: 123-456-7890<br/>
                    <a href="mailto:info@mysite.com">info@mysite.com</a>
                    </address>
            </div>
        </div>
        
      <p>&copy; 2024 MR/Athapattukanda K.V. All rights reserved.| Phone no-0771527935</p>
      
    </footer>
  );
}


export default Footer;
