import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import templateOneData from "../templateOneData.json";
function App() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 min-h-screen text-white pt-20 md:pt-24">
        <Navbar />
        {templateOneData.NavBar.about && <About />}
        {templateOneData.NavBar.projects && <Projects />}
        {templateOneData.NavBar.skills && <Skills />}
        {templateOneData.NavBar.experience && <Experience />}
        {templateOneData.NavBar.contact && <Contact />}
      </div>
      <div className="text-white">
        <Footer />
      </div>
    </>
  );
}

export default App;
