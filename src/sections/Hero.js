import React from "react";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";
import Typed from "react-typed";
import HeroBG from "../../src/img/hero-bg.jpg";

const StyleHero = styled.div`
  width: 100%;
  height: 600px;
  background-size: cover;
  background-image: ${(props) => `url(${props.url})`};

  display: flex;
  flex-wrap: wrap;
  justify-content: center; // 水平置中
  align-items: center; // 垂直置中

  h1 {
    font-size: 80px;
    font-weight: 700;
    line-height: 80px;
    color: #fff;
  }
`;

const TypeCenter = styled.div`
  color: white;
  font-weight: 900;
  font-size: 24px;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Hero = () => {
  return (
    <>
      <StyleHero url={HeroBG} id="hero">
        <div>
          <h1>Hi, I'm Yanni!</h1>
        </div>
        <TypeCenter>
          <Typed
            strings={[
              "Web Designer",
              "Web Developer",
              "Front End Developer",
              "Apps Designer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
        </TypeCenter>
      </StyleHero>
    </>
  );
};

export default Hero;
