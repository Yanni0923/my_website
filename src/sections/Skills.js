import React from "react";
import styled from "@emotion/styled";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";
import SectionSubTitle from "../components/common/SectionSubtitle";
import {
  ColorDeepBlue,
  ColorSkin,
  ColorLightOrange,
} from "../components/common/MyColor";

const titleH2 = "Skills";
const titlePara =
  "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
const titleFront = "My Skills";
const titleBack = "Skills";

const StyledProgress = styled.div`
  height: 50px;
  display: block;
  background: none;
  margin: 40px 0;

  .skill {
    margin: 0 0 6px 0;
    text-transform: uppercase;
    display: block;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: ${ColorDeepBlue};

    .val {
      float: right;
      font-style: normal;
    }
  }

  .progress-div {
    background-color: ${ColorSkin};
    border-radius: 0.5rem;

    .progress {
      background-color: ${ColorLightOrange};
      height: 10px;
      border-radius: 1rem;
      transition: 1s ease;
      transition-delay: 0.5s;
    }
  }
`;

const ProgressBar = ({ percent }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(percent);
  });

  return (
    <div>
      <div className="progress-div" style={{ width: "100%" }}>
        <div style={{ width: `${value}%` }} className="progress" />
      </div>
    </div>
  );
};

const ProgressComponent = (props) => {
  return (
    <StyledProgress>
      <span className="skill">
        {props.progressBarName}
        <i className="val">{props.progressBarPercent}%</i>
      </span>
      <ProgressBar percent={props.progressBarPercent} />
    </StyledProgress>
  );
};

const Skills = () => {
  return (
    <>
      <Section>
        <SectionTitle titleFront={titleFront} titleBack={titleBack} />
        <SectionSubTitle h2={titleH2} para={titlePara} />
        <div className="row skills-content">
          <div className="col-lg-6">
            <ProgressComponent
              progressBarName={"HTML"}
              progressBarPercent={100}
            />
            <ProgressComponent
              progressBarName={"CSS"}
              progressBarPercent={90}
            />
            <ProgressComponent
              progressBarName={"JAVASCRIPT"}
              progressBarPercent={75}
            />
          </div>
          <div className="col-lg-6">
            <ProgressComponent
              progressBarName={"PHP"}
              progressBarPercent={80}
            />
            <ProgressComponent
              progressBarName={"WORDPRESS/CMS"}
              progressBarPercent={90}
            />
            <ProgressComponent
              progressBarName={"PHOTOSHOP55"}
              progressBarPercent={55}
            />
          </div>
        </div>
      </Section>
    </>
  );
};
export default Skills;
