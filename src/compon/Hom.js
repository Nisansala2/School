// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';



const Hom = () => {
   const imgURL=process.env.PUBLIC_URL+ 'images/reschool.JPG'
  return(  
    <div>
     
    <div className='home-page' style={{
      backgroundImage:`URL(${imgURL})`,
        backgroundSize:'cover'
    }}>

      <br/>
      <br/><br/>
      <br/>
    <h1 className='headding'>Welcome to Green School..!</h1>
    <h2 className='top' >The Place where life is built without bring limited to knoweldge</h2>
    <div className='button-contain'>
      <button className='discover-button' ><Link to="/About" className='lbutton'>Click More About here</Link>
        </button><br/>
        <button className='sign-button'><Link to ="/Acadamic">Login to Learning</Link></button>
      
      <br/>
      </div>

        <div className="button-container">
          
          
        </div>
    
    </div>
    
    
      
      </div>
      
  );
    
}

export default Hom;
