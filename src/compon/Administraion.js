import React from 'react';

const Administraion = () => {
  const imgURL=process.env.PUBLIC_URL+ 'images/sadmin.png'
  return (
    <div>
      <div className='admin' style={{
        backgroundImage:`URL(${imgURL})`,
       
      }}>
        <h2>Welcome</h2>
      </div>
    <div className="principal-message">
      <img src='/images/Principle.jpg' alt="Principal" className="principal-image" />
      <div className="message-content">
        <h3>Principle- Mr.Thilak Megahawatts</h3>
        <p>I consider it a great pleasure to send a message to the  web site of Athapaththukanda Vidyalaya, Matara which has a legacy of 65years.</p>
        <p>It is my duty and responsibility to bring into notice those who have contributed to the progress of the college at the inception and throughout her journey to glory and grandeur to become one of the prominent people' national schools in the island. First, I commemorate the founder Mr D.A. Danapala for his noble act for the much-needed revival of the Sinhala  at the time.</p>
        <p>I would like to state with much honour and gratitude the service of the past principals, the members of the academic, non-academic staff and past Sujathians who faced myriad of challenges and trials and tribulations in the long march of the college to reach her present prominent status.</p>
      </div>
 
    </div>
    <h2 className='devo'>School Development society</h2>
      <p className='devo-more'>Once it was a Teacher Parent Association, which was active for providing numerous facilities for the school. 
The two main objectives of the society is:

› Develop the school to fulfill the educational needs of the teachers, students, and the people of the suburbs of the school according to concepts of the Ministry of the Education.
› To make the organization to do fruitful changers of social, cultural, econoimical life of the people of the suburbs.
<br/>

 The Activities of the Society:
 <ul>
<li>Educational Activities</li>
<li>Cultural and social activities.</li>
<li>Fulfill the essentials of the organization.</li>
<li>Activities regarding vocational development of principal, teachers and welfare of the students.</li>
</ul>


Mainly parents of the students, who inculded to the register, regarders and the teachers of the school are able get the membership of the society. Apart from the under special conditions, the old girls and the well-wishers to the school also are capable to get the membership.

Within the last period the school development society played a valuable role in providing a help to the education and development of the school in numerous ways
</p>
    </div>
  );
};

export default  Administraion;
