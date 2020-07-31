import React from 'react';
import './App.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Logos from '../Logos/Logos';
import Projects from '../Projects/Projects';
import NavBar from '../NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Logos />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
