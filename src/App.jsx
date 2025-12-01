import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/experiences";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import ContactSection from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Certifications />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
