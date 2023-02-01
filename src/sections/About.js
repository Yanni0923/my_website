import React from "react";
import styled from "@emotion/styled";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";
import SectionSubTitle from "../components/common/SectionSubtitle";

// 全域變數
const titleFront = "About Me";
const titleBack = "About";

const About = () => {
  return (
    <>
      <Section>
        <SectionTitle titleFront={titleFront} titleBack={titleBack} />
        個別 Section 的內容放這裡
      </Section>
    </>
  );
};

export default About;
