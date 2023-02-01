// https://react-bootstrap.github.io/getting-started/introduction/
import React from "react";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <Hero />
      <Header />
      <About />
      <Skills />
      <Resume />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
