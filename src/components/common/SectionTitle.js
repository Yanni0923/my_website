import React from "react";
import styled from "@emotion/styled";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ColorDeepBlue2, ColorDeepPink } from "../common/MyColor";

const BigTitle = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
`;

const TitleFront = styled.h1`
  position: absolute;
  text-transform: uppercase;
  color: ${ColorDeepPink};
  font-size: 36px;
`;

const TitleBack = styled.h1`
  text-transform: uppercase;
  color: white;
  -webkit-text-stroke: 1px #dee2e6;
  font-size: 135px;
`;

const SectionTitle = (props) => {
  return (
    <>
      <BigTitle className="d-flex">
        <TitleBack className="display-1">{props.titleBack}</TitleBack>
        <TitleFront>{props.titleFront}</TitleFront>
      </BigTitle>
    </>
  );
};

export default SectionTitle;
