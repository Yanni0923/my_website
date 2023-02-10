import React from "react";
import styled from "@emotion/styled";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";
import SectionSubTitle from "../components/common/SectionSubtitle";
import { BsFillRecordCircleFill } from "react-icons/bs";

const titleH2 = "Resume";
const titlePara =
  "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
const titleFront = "My experience";
const titleBack = "Resume";

const StyledResume = styled.div`
  .resume-title {
    font-size: 26px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #4b7dab;
    font-family: "Poppins", sans-serif;
  }

  .resume-item {
    padding: 0 0 20px 20px;
    margin-top: -2px;
    /* 原本的粉紅色 #ff8ba7 */
    border-left: 2px solid #ff8ba7;
    position: relative;

    h4 {
      line-height: 18px;
      font-size: 18px;
      font-weight: 600;
      color: #2c4964;
      margin-bottom: 10px;
    }

    h5 {
      font-size: 16px;
      background: #e4ebf3;
      padding: 5px 15px;
      display: inline-block;
      font-weight: 400;
      margin-bottom: 10px;
      font-family: "Poppins", sans-serif;
    }

    li {
      padding-left: 2em;
      text-indent: -1.5em;
    }

    ul {
      padding-left: 20px;

      li {
        padding-bottom: 10px;
      }
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50px;
      left: -9px;
      top: 0;
      background: #fff;
      border: 2px solid #ff8ba7;
    }
  }
`;

const StyledMaster = styled.div`
  padding: 0 0 1px 20px;
  margin-top: -2px;
  /* 原本的粉紅色 #ff8ba7 */
  border-left: 2px solid #ff8ba7;
  position: relative;

  .react-icons {
    top: 7px;
    left: -29px;
  }
`;

const Master = () => {
  return (
    <StyledMaster className="border-left border-primary pt-2 pl-4 ml-2">
      <div className="position-relative mb-4">
        <BsFillRecordCircleFill className="text-primary position-absolute react-icons" />
        <h5 className="font-weight-bold mb-1">Master In CSE</h5>
        <p className="mb-2">
          <strong>Cambridge University</strong> | <small>2000 - 2050</small>
        </p>
        <p style={{ marginBottom: "-10px" }}>
          Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
          dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
          lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
        </p>
      </div>
    </StyledMaster>
  );
};

const ResumeItemEducation = (props) => {
  return (
    <div class="resume-item">
      <h4>{props.subject}</h4>
      <h5>{props.year}</h5>
      <p>
        <em>{props.department}</em>
      </p>
      <p>{props.desription}</p>
    </div>
  );
};

const ResumeItemProfessionExperience = (props) => {
  return (
    <div class="resume-item">
      <h4>{props.subject}</h4>
      <h5>{props.year}</h5>
      <p>
        <em>{props.department}</em>
      </p>
      {props.lists.map((ele) => (
        <li>{ele}</li>
      ))}
    </div>
  );
};

const Resume = () => {
  return (
    <>
      <Section>
        <SectionTitle titleFront={titleFront} titleBack={titleBack} />
        <SectionSubTitle h2={titleH2} para={titlePara} />
        <div className="row">
          <StyledResume className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Alice Barkley</h4>
              <Master />
              <Master />
              <Master />
              <p>
                <em>
                  Innovative and deadline-driven Graphic Designer with 3+ years
                  of experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </em>
              </p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>
            <h3 class="resume-title">Education</h3>
            <ResumeItemEducation
              subject="Master of Fine Arts &amp; Graphic Design"
              year="2015 - 2016"
              department="Rochester Institute of Technology, Rochester, NY"
              desription="Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend"
            />
            <ResumeItemEducation
              subject="Bachelor of Fine Arts & Graphic Design"
              year="2010 - 2014"
              department="Rochester Institute of Technology, Rochester, NY"
              desription="Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila"
            />
          </StyledResume>
          <StyledResume className="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>

            <ResumeItemProfessionExperience
              subject="Senior graphic design specialist"
              year="2019 - Present"
              department="Experion, New York, NY"
              lists={[
                "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
                "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
                "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
                "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
              ]}
            />
            <ResumeItemProfessionExperience
              subject="Graphic design specialist"
              year="2017 - 2018"
              department="Stepping Stone Advertising, New York, NY"
              lists={[
                "Developed numerous marketing programs (logos, brochures,infographics,presentations, and advertisements).",
                "Managed up to 5 projects or tasks at a given time while under pressure",
                "Recommended and consulted with clients on the most appropriate graphic design",
                "Created 4+ design presentations and proposals a month for clients and account managers",
              ]}
            />
          </StyledResume>
        </div>
      </Section>
    </>
  );
};
export default Resume;
