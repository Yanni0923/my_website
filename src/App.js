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
import styled from "@emotion/styled";

const StyledGlobal = styled.div`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6c757d;
  text-align: left;
  background-color: #ffffff;
`;

const App = () => {
  return (
    <StyledGlobal>
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
    </StyledGlobal>
  );
};

export default App;
