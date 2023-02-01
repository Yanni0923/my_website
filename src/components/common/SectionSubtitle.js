import React from "react";
import styled from "@emotion/styled";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ColorDeepBlue2, ColorDeepPink } from "../common/MyColor";

const StyleSectionTitle = styled.div`
  padding-bottom: 30px;

  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 15px;
    padding-bottom: 15px;
    position: relative;
    color: ${ColorDeepBlue2};
  }

  h2:after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: ${ColorDeepPink};
    bottom: 0;
    left: 0;
  }
  p {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 1rem;
    color: ;
  }
`;

const SectionSubTitle = (props) => {
  return (
    <>
      <StyleSectionTitle>
        <h2>{props.h2}</h2>
        <p>{props.para}</p>
      </StyleSectionTitle>
    </>
  );
};

export default SectionSubTitle;
