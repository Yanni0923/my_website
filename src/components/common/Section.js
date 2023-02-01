import React from "react";
import styled from "@emotion/styled";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ColorDeepBlue2, ColorDeepPink } from "../common/MyColor";
import SectionTitle from "./SectionTitle";

const StyleSection = styled.section`
  padding: 60px 0;
  background: linear-gradient(0deg, #f2f6f9 0%, #fff 100%);
`;

// 還沒有添加 wow fadeInUp 特效
const StyledContainerFadeInUp = styled.div``;

const Section = (props) => {
  return (
    <StyleSection>
      <StyledContainerFadeInUp className="container">
        {props.children}
      </StyledContainerFadeInUp>
    </StyleSection>
  );
};

export default Section;
