import React, { useRef } from 'react';
import './App.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Logos from '../Logos/Logos';
import Projects from '../Projects/Projects';
import NavBar from '../NavBar/NavBar';

function App() {
  const contactRef = useRef(null);
  return (
    <div className="App">
      <NavBar />
      <Hero contactRef={contactRef} />
      <Logos />
      <About />
      <Projects />
      <Contact contactRef={contactRef} />
    </div>
  );
}
export default App;
