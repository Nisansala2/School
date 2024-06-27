import React from 'react'
import { Link } from 'react-router-dom';

const Acadamic = () =>{
  const imgURL=process.env.PUBLIC_URL+ 'images/aca.jpg'
  return (
    <div>
       <div className='aca-top' style={{
        backgroundImage:`URL(${imgURL})`,
        
       }}>
        <br/><br/><br/>
        
        <br/>
        <h1>Acadamic</h1>
      </div>
     <nav className="acada">
      <h2>Academics at a glance</h2>
      <ul className='aca'>
        <li><Link to="/Achivments">Achievements</Link></li>
        <li><Link to="/Acadamicdetail">Assigment</Link></li>
        <li><Link to="/note">Note</Link></li>
        <li><Link to="/management-committee">Exams</Link></li>
        <li><Link to="/management-committee">Sports</Link></li>
        <li><Link to="/management-committee">Parents</Link></li>
      </ul>
    </nav>
  

     </div>
      
       
           
           
            
            
        
      
  )
}
  export default  Acadamic;
