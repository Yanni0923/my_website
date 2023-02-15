import React from "react";
import styled from "@emotion/styled";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";
import SectionSubTitle from "../components/common/SectionSubtitle";
import portfolio1 from "../../src/img/portfolio/portfolio-1.jpg";
import portfolio2 from "../../src/img/portfolio/portfolio-2.jpg";
import portfolio3 from "../../src/img/portfolio/portfolio-3.jpg";
import portfolio4 from "../../src/img/portfolio/portfolio-4.jpg";
import portfolio5 from "../../src/img/portfolio/portfolio-5.jpg";
import portfolio6 from "../../src/img/portfolio/portfolio-6.jpg";
import portfolio7 from "../../src/img/portfolio/portfolio-7.jpg";
import portfolio8 from "../../src/img/portfolio/portfolio-8.jpg";
import portfolio9 from "../../src/img/portfolio/portfolio-9.jpg";
import { BsPlus, BsLink45Deg } from "react-icons/bs";

const titleH2 = "Portfolio";
const titlePara =
  "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
const titleFront = "My Portfolio";
const titleBack = "Portfolio";

const StyledPortfolioFilter = styled.div`
  #portfolio-filters {
    padding: 0;
    margin: 0 auto 35px auto;
    list-style: none;
    text-align: center;
    background: #fff;
    border-radius: 50px;
    padding: 2px 15px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);

    li {
      cursor: pointer;
      display: inline-block;
      padding: 10px 15px 8px 15px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      text-transform: uppercase;
      color: #5a656e;
      margin-bottom: 5px;
      transition: all 0.3s ease-in-out;

      &:hover,
      &.filter-active {
        color: #ff8ba7;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const StylePortfolioItem = styled.div`
  // background-size: cover;
  // background-image: ${(props) => `url(${props.url})`};
  height: 300px;
  margin-bottom: 30px;
  padding: 15px;

  // position: relative;
  .portfolio-wrap {
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    height: 100%;
    z-index: 1;

    &:before {
      content: "";
      background: rgba(44, 73, 100, 0.6);
      position: absolute;
      left: 30px;
      right: 30px;
      top: 30px;
      bottom: 30px;
      transition: all ease-in-out 0.3s;
      z-index: 2;
      opacity: 0;
    }

    .portfolio-info {
      opacity: 0;
      position: absolute;
      top: 2%;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 3;
      // transition: all ease-in-out 0.3s;

      h4 {
        font-size: 20px;
        color: #fff;
        font-weight: 600;
      }

      p {
        color: #fff;
        font-size: 14px;
        text-transform: uppercase;
      }
    }
  }

  .portfolio-links {
    opacity: 0;
    left: 0;
    right: 0;
    bottom: 10%;
    text-align: center;
    z-index: 3;
    position: absolute;
    transition: all ease-in-out 0.3s;

    a {
      color: #fff;
      margin: 0 2px;
      font-size: 28px;
      display: inline-block;
      transition: 0.3s;
    }

    a:hover {
      color: #e684ae;
    }
  }

  .portfolio-wrap:hover::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
  }

  .portfolio-wrap:hover .portfolio-info {
    opacity: 1;
    top: calc(50% - 48px);
  }

  .portfolio-wrap:hover .portfolio-links {
    opacity: 1;
    bottom: calc(50% - 50px);
  }
`;

const StyleImage = styled.div`
  background-size: cover;
  background-image: ${(props) => `url(${props.url})`};
  height: 300px;
`;

const PortfolioItem = (props) => {
  return (
    <StylePortfolioItem className="col-lg-4 col-md-6" url={props.image_link}>
      <StyleImage url={props.image_link}>
        <div className="portfolio-wrap">
          <div className="portfolio-info">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
          </div>
          <div className="portfolio-links">
            <a
              href={props.image_link}
              data-gallery="portfolioGallery"
              className="portfolio-lightbox"
              title={props.title}
            >
              <BsPlus />
            </a>
            <a href={props.detail_link} title="More Details">
              <BsLink45Deg />
            </a>
          </div>
        </div>
      </StyleImage>
    </StylePortfolioItem>
  );
};
const Portfolio = () => {
  return (
    <>
      <Section>
        <SectionTitle titleFront={titleFront} titleBack={titleBack} />
        <SectionSubTitle h2={titleH2} para={titlePara} />

        <div className="row">
          <StyledPortfolioFilter className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              {/* 不知道怎麼做 data-filter */}
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </StyledPortfolioFilter>
        </div>

        <div className="row">
          <PortfolioItem
            className="filter-app"
            title="App 1"
            description="App"
            image_link={portfolio1}
            detail_link="portfolio-details.html"
          />
          <PortfolioItem
            title="App 2"
            description="App"
            image_link={portfolio2}
            detail_link="portfolio-details.html"
          />
          <PortfolioItem
            title="App 3"
            description="App"
            image_link={portfolio3}
            detail_link="portfolio-details.html"
          />

          <PortfolioItem
            title="App 4"
            description="App"
            image_link={portfolio4}
            detail_link="portfolio-details.html"
          />
          <PortfolioItem
            title="App 5"
            description="App"
            image_link={portfolio5}
            detail_link="portfolio-details.html"
          />
          <PortfolioItem
            title="App 6"
            description="App"
            image_link={portfolio6}
            detail_link="portfolio-details.html"
          />
          <PortfolioItem
            title="App 7"
            description="App"
            image_link={portfolio7}
            detail_link="portfolio-details.html"
          />
          <PortfolioItem
            title="App 8"
            description="App"
            image_link={portfolio8}
            detail_link="portfolio-details.html"
          />
          <PortfolioItem
            title="App 9"
            description="App"
            image_link={portfolio9}
            detail_link="portfolio-details.html"
          />
        </div>
      </Section>
    </>
  );
};
export default Portfolio;
