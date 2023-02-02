import React from "react";
import styled from "@emotion/styled";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";
import SectionSubTitle from "../components/common/SectionSubtitle";

const titleH2 = "Skills";
const titlePara =
  "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
const titleFront = "My Skills";
const titleBack = "Skills";

const Services = () => {
  return (
    <>
      <Section>
        <SectionTitle titleFront={titleFront} titleBack={titleBack} />
        <SectionSubTitle h2={titleH2} para={titlePara} />
        個別 Section 的內容放這裡
      </Section>
    </>
  );
};
export default Services;
