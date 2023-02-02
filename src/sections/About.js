import React from "react";
import styled from "@emotion/styled";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";
import SectionSubTitle from "../components/common/SectionSubtitle";
import Me from "../../src/img/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import PureCounter from "@srexi/purecounterjs";

// 全域變數
const titleFront = "About Me";
const titleBack = "About";

const StyledAboutImageContainer = styled.div`
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;

  align-items: stretch;
  justify-content: center;
`;

const StyleAboutInfoContainer = styled.div`
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;

  h3 {
    font-weight: 500;
    font-size: 34px;
    color: #2c4964;
  }

  p {
    margin-bottom: 0;
  }
`;

const SpanPureCounter = new PureCounter({
  selector: ".purecounter",
});

const CountBox = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: "center";
  align-self: "center";

  span {
    font-size: 30px;
    line-height: 20px;
    display: block;
    font-weight: 700;
    color: #2c4964;
    margin-left: 20px;
    font-family: "Playfair Display", serif;
  }

  p {
    padding: 15px 0 0 0;
    margin: 0 0 0 20px;
    font-family: "Playfair Display", serif;
    font-size: 14px;
    color: #437099;
  }
`;

const CountBoxContainer = (props) => {
  return (
    <div className="col-md-6 d-md-flex align-items-md-stretch">
      <CountBox>
        <FontAwesomeIcon
          icon={faCoffee}
          className="col-1"
          style={{
            display: "flex",
            alignSelf: "center",
            justifyItems: "center",
            justifyContent: "center",
            fontSize: "60px",
            color: "#eeafca",
            float: "left",
            lineHeight: 0,
          }}
        />
        <div className="col-13">
          <span
            data-purecounter-start="0"
            data-purecounter-end={props.end}
            data-purecounter-duration="1"
            className="purecounter"
          >
            {props.end}
          </span>
          <p>
            <strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid
            ipsam architecto ut.
          </p>
        </div>
      </CountBox>
    </div>
  );
};

const About = () => {
  return (
    <>
      <Section>
        <SectionTitle titleFront={titleFront} titleBack={titleBack} />
        <div className="row no-gutters">
          <StyledAboutImageContainer
            className="col-xl-5 d-flex justify-content-lg-start"
            url={Me}
          />
          <StyleAboutInfoContainer className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex ">
            <h3>李妍伶（Yanni）</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
            <div className="row">
              {/* 吃參數 */}
              <CountBoxContainer className="col-md-6" end={65} />
              <CountBoxContainer className="col-md-6" end={85} />
              <CountBoxContainer className="col-md-6" end={12} />
              <CountBoxContainer className="col-md-6" end={15} />
            </div>
          </StyleAboutInfoContainer>
        </div>
      </Section>
    </>
  );
};

export default About;
