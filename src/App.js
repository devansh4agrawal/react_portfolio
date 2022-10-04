import './App.css';
import React from 'react'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skill from './Components/Skills/Skill';
import Service from './Components/Services/Service';
import Qualification from './Components/Qualification/Qualification';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Scroll from './Components/Scroll/Scroll';

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Qualification/>
        <Skill/>
        <Service/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
      <Scroll/>
    </>
  )
}

export default App;
