import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ModalAll from "./components/Modal";
import Hero from "./components/Hero";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ModalAll />
      <Skills />
      <Work />

    </div>
  );
}

export default App;
