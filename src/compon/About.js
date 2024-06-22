// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div>
    <div className="about-container">
     <div className='text-about'>
     <h2>Vision</h2>
     <p>To endow the society with a well-rounded child who can ovrcome challenges</p>
     <br/>
     <h2>Mission</h2>
      <p>To give birth to a child equipped with knoweldege, qualities and skill suitablr for the future worldS</p>  
      </div> 
      <div className='about-image'>
     <img src='/images/amp.jpg' alt='amp' />
     </div > 
     </div>  
     <h2>School History</h2>
      <div className='detail'>
      
      <div className='student-image'>
      <img src='/images/student.jpg' alt='student'></img>
      </div>
      <div className='paragraph'>
        <p>Athapathukanda Viddayala which was estabilished in the year 1952.It is located in Athapattukanda rural area of Deiyandra town,Matara distric
        Sourthen province.Eventhough it is started with only fifty students and a staff of two teachers. It has been started primarly for the rural children.
        Currently this school is developing and has become a school operating under green concept......
      </p>
      </div>
      
     </div>
    </div>
  );
}

export default About;
