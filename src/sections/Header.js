import React from "react";
import styled from "@emotion/styled";
// import { Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { DeepBlue, DeepPink } from "../components/common/MyColor";

const StyledHeader = styled.header`
  transition: all 0.5s;
  z-index: 997;
  transition: all 0.5s;
  height: 60px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  // [下兩行]滾動時把 header 卡在上面
  position: sticky;
  top: 0;

  .logo h1 {
    font-size: 26px;
    margin: 0;
    padding: 6px 0;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 3px;
    text-transform: uppercase;

    a,
    a:hover {
      color: ${DeepBlue};
      text-decoration: none;
    }
  }
`;

const StyledNavbar = styled.nav`
  padding: 0;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  li {
    position: relative;
  }

  a,
  a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 10px 30px;
    font-size: 14px;
    font-weight: 700;
    color: ${DeepBlue};
    white-space: nowrap;
    transition: 0.3s;
    text-decoration: none;
  }
  a:hover,
  .active,
  .active:focus,
  .li:hover > a {
    color: ${DeepPink};
  }
`;

const StyledAnchor = styled.a``;

const Header = () => {
  return (
    <>
      <StyledHeader className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Header 左邊 */}
          <div className="logo">
            <h1>
              <a href="index.html">個人網站</a>
            </h1>
          </div>

          {/* Header 右邊 */}
          {/* scrollto 的 JS 要補上去 */}
          <StyledNavbar>
            <ul>
              <li>
                <StyledAnchor className="active" href="#hero">
                  Home
                </StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="#about">About</StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="#resume">Resume</StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="#services">Services</StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="#portfolio">Portfolio</StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="#contact">Contact</StyledAnchor>
              </li>
            </ul>
          </StyledNavbar>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
