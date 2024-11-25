import './App.css';
import Hero from './components/Hero';
import Redes from './components/Redes';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white ">
      <Header/>
      <Hero/>
      <Redes/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
