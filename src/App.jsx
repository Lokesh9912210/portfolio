import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Contact from "./components/Contact";
import LeetCode from "./components/LeetCode";
import Certificates from "./components/Certificates";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LeetCode />
      <Certificates />
      <OpenSource />
      <Contact />
    </>
  );
}

export default App;