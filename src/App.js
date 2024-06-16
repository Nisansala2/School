import React from 'react';
import './App.css';
import About from './compon/About';
import Contact from './compon/Contact';
import Header from './compon/Header';
import Footer from './compon/Footer';
import Hom from './compon/Hom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (

    
      <Router>
      <Header/>
      <main>
        <Routes>
        <Route path="/" element={<Hom/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path='/Contact'element={<Contact/>}></Route>
        </Routes>
      </main>
      <Footer/>
      </Router>
  
  );
}

export default App;
