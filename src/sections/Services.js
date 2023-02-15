import React from "react";
import styled from "@emotion/styled";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";
import SectionSubTitle from "../components/common/SectionSubtitle";
import {
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiLaughingFill,
  BsFillEmojiHeartEyesFill,
} from "react-icons/bs";

const titleH2 = "Services";
const titlePara =
  "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
const titleFront = "MY SERVICES";
const titleBack = "SERVICE";

const StyledServiceItem = styled.div`
  .icon-box {
    padding: 20px 15px;
    position: relative;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 0 29px 0 rgba(68, 88, 144, 0.2);
    transition: all 0.3s ease-in-out;
    border-radius: 8px;
    text-align: center;
    z-index: 1;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 0;
      transition: ease-in-out 0.3s;
      z-index: -1;
    }

    &:hover:before {
      background: #ffc6c7;
      height: 100%;
      border-radius: 0px;
    }
  }
  .icon {
    margin: 0 auto 30px auto;
    position: relative;

    display: inline-block;
    text-align: center;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background: #ffc6c7;
    transition: all 0.3s ease-in-out;

    .bs-icon {
      font-size: 36px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      line-height: 1;
      color: #fff;
    }
  }

  .title {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;

    a {
      color: #111;
      text-decoration: none;
    }
  }

  .description {
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 0;
  }

  .icon-box:hover .title a,
  .icon-box:hover .description {
    color: #fff;
  }

  .icon-box:hover .icon {
    background: #fff;
  }

  .icon-box:hover .icon .bs-icon {
    color: #ffc6c7;
  }
`;

const ServiceItem = (props) => {
  return (
    <StyledServiceItem className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div className="icon-box">
        <div className="icon">{props.children}</div>
        <h4 className="title">
          <a href="">{props.title}</a>
        </h4>
        <p className="description">{props.description}</p>
      </div>
    </StyledServiceItem>
  );
};

const Services = () => {
  return (
    <>
      <Section>
        <SectionTitle titleFront={titleFront} titleBack={titleBack} />
        <SectionSubTitle h2={titleH2} para={titlePara} />
        <div className="row">
          <ServiceItem
            title="Lorem Ipsum"
            description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
          >
            <BsFillEmojiSmileFill className="bs-icon" />
          </ServiceItem>
          <ServiceItem
            title="Sed ut perspiciatis"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
          >
            <BsFillEmojiNeutralFill className="bs-icon" />
          </ServiceItem>
          <ServiceItem
            title="Magni Dolores"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
          >
            <BsFillEmojiLaughingFill className="bs-icon" />
          </ServiceItem>
          <ServiceItem
            title="Nemo Enim"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
          >
            <BsFillEmojiHeartEyesFill className="bs-icon" />
          </ServiceItem>
        </div>
      </Section>
    </>
  );
};
export default Services;
