// src/components/Home.js
import React from 'react';


const Hom = () => {
  return (
    <div>
     
    <div className='home-page'>
    <h2 className='headding'>Welcome to Green School</h2>
      <h4 className='hfour'>Athpattukanda Vidyalaya <br/> Deiyandra<br/> Matara</h4>
      
      <br/>
    </div>
    <div className="about-container">
     <div className='text-about'>
     <h2>Vision</h2>
     <p>To endow the society with a well-rounded child who can ovrcome challenges</p>
     <br/>
     <h2>Mission</h2>
      <p>To give birth to a child equipped with knoweldege, qualities and skill suitablr for the future worldS</p>  
      </div> 
      <div className='about-image'>
     <img src='/images/student.jpg' alt='school' />
     </div >   
     
    </div>
    </div>
    
  );
}

export default Hom;
