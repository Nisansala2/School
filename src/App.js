import React from 'react';
import './App.css';
import About from './compon/About';
import Contact from './compon/Contact';
import Header from './compon/Header';
import Footer from './compon/Footer';
import Hom from './compon/Hom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acadamic from './compon/Acadamic';
import Administraion from './compon/Administraion';
import './Footer.css';
import './Header.css';
import './About.css';
import './Acadamic.css';
import './Contact.css';
import './Admin.css';
import Achivments from './compon/Achivments';


const App = () => {
  return (

    
      <Router>
      <Header/>
      <main>
        <Routes>
        <Route path="/" element={<Hom/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path='/Contact'element={<Contact/>}></Route>
        <Route path='/Acadamic'element={<Acadamic/>}></Route>
        <Route path='/Administraion'element={<Administraion/>}></Route>
        <Route path='/Achivments'element={<Achivments/>}></Route>
        </Routes>
      </main>
      <Footer/>
      </Router>
  
  );
}

export default App;
