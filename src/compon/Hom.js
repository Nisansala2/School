// src/components/Home.js
import React from 'react';


const Hom = () => {
  return (
    <div>
      <h2 className='headding'>Welcome to Green School</h2>
    <div className='home-page'>
    
      <h4>A Green School</h4>
      <h4>Athpattukanda Vidyalaya <br/> Deiyandra<br/> Matara</h4>
      <p className='paragraph'>Athapathukanda Viddayala which was estabilished in the year 1952.It is located in Athapattukanda rural area of Deiyandra town,Matara distric
        Sourthen province.Eventhough it is started with only fifty students and a staff of two teachers.<br/> It has been started primarly for the rural children.
        Currently this school is developing and has become a school operating under green concept.
        Sujatha Vidyalaya Matara which was established in 1928 in sourthern , Sri Lanka has 
        largly contributed in creating useful citizens to the nation. Eventhough it 
        started with only thirty six students and a staff of four teachers , at presents it stand as one of the well recognized school ,
         both nationally and internationally.
      </p>
      <br/>
    </div>
    <div className="about-container">
     <div className='text-about'>
     <h2>Vision</h2>
     <p>To endow the society with a well-rounded child<br/> who can ovrcome challenges</p>
     <br/>
     <h2>Mission</h2>
      <p>To give birth to a child equipped with knoweldege,<br/> qualities and skill suitablr for the future worldS</p>  
      </div> 
      <div className='about-image'>
     <img src='/images/student.jpg' alt='school' />
     </div >   
     
    </div>
    </div>
    
  );
}

export default Hom;
