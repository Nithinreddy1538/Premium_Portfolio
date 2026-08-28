import Loader from "./components/Loader/Loader";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import Aurora from "./components/Aurora/Aurora";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother);
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
  }, []);
  return (
   <div id="smooth-wrapper">
  <Loader />
  <Cursor />

  {/* <Aurora /> */}
  <Background />

  <Navbar />
  <div id="smooth-content">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
</div>
  );
}

export default App;