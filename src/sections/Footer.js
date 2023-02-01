import React from "react";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";

const StyledFooter = styled.footer`
  background: #fff;
  padding: 24px 0;
  font-size: 14px;
  box-shadow: 0px 0 20px 0 rgba(0, 0, 0, 0.12);
`;

const Copyright = styled.div`
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter id="copyright">
      <Container>
        <Copyright>
          &copy; Copyright{" "}
          <strong>
            <span>Yanni0923</span>
          </strong>
          . All Rights Reserved
        </Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
