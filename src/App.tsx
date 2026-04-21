import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Awards />
          <TechStack />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ProjectModal />
      </div>
    </Router>
  );
}

export default App;
