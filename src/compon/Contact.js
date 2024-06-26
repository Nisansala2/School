// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div 
    >
      <h2 className='contact'>Location</h2>
      <div className='map'>
      <a href="https://www.google.com/maps/place/Sujatha+Vidyalaya/" >
      <img src='/images/map.png' alt='map' />
      </a>
      </div>
      <h2 className='con-name'>Contact Us</h2>
      <ul className='con'>
        <li>Phone Number-0771527935</li>
        <li>Email-<a href='Athapaththukanda@gmail.com'>Athapathtukanda@gmail.com</a></li>
        <li>Addres-MR/Athapaththukanda K.V,Athapattukanda,Deiyandra,Matara</li>
      </ul>
      
      

    </div>
  );
}

export default Contact;
