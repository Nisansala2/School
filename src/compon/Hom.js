// src/components/Home.js
import React from 'react';


const Hom = () => {
  return (
    <div>
      <h2 className='headding'>Welcome to Green School</h2>
      <div className="about-container">
      <div className='about-image'>
     <img src='/images/amp.jpg' alt='school'  style={{ maxWidth: '100%', height: '50%' }}/>
     </div >
     <div className='text-about'>
     <h2>Vision</h2>
     <p>To endow the society with a well-rounded child<br/> who can ovrcome challenges</p>
     <br/>
     <h2>Mission</h2>
      <p>To give birth to a child equipped with knoweldege,<br/> qualities and skill suitablr for the future worldS</p>      
      </div>
    </div>
    </div>
  );
}

export default Hom;
