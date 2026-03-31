import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Page initialization
  }, []);

  return (
    <main className="relative bg-secondary min-h-screen selection:bg-primary/30 selection:text-white">
      {/* Dynamic Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
