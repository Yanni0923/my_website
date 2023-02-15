import React from "react";
import styled from "@emotion/styled";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";
import SectionSubTitle from "../components/common/SectionSubtitle";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsGeoAlt,
  BsEnvelope,
  BsPhone,
} from "react-icons/bs";

const titleH2 = "Contact";
const titlePara =
  "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
const titleFront = "Contact Me";
const titleBack = "Contact";

const StyleContactAbout = styled.div`
  h3 {
    font-size: 36px;
    margin: 0 0 10px 0;
    padding: 0;
    line-height: 1;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #ff8ba7;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    font-family: "Playfair Display", serif;
    color: #3c6387;
  }

  .social-links {
    padding-bottom: 20px;

    a {
      font-size: 18px;
      display: inline-block;
      background: #fff;
      color: #ff8ba7;
      line-height: 0;
      padding: 8px 0;
      margin-right: 10px;
      border-radius: 50%;
      text-align: center;
      width: 36px;
      height: 36px;
      transition: 0.3s;
      border: 1px solid #ff8ba7;
    }

    a:hover {
      background: #ff8ba7;
      color: #fff;
    }
  }
`;

const StyleContactInfo = styled.div`
  color: #5a656e;

  .contact-icon {
    font-size: 32px;
    color: #ff8ba7;
    line-height: 0;
    margin-right: 15px;
  }

  p {
    font-size: 14px;
    margin: 0;
  }
`;

const StyleContactForm = styled.form`
  input,
  textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
  }

  input:focus,
  textarea:focus {
    border-color: #ff8ba7;
  }

  button[type="submit"] {
    margin-top: 30px;
    background: #ff8ba7;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;

    &:hover {
      background: #dd5a92;
    }
  }
`;

const Contact = () => {
  return (
    <Section>
      <SectionTitle titleFront={titleFront} titleBack={titleBack} />
      <SectionSubTitle h2={titleH2} para={titlePara} />
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <StyleContactAbout className="contact-about">
            <h3>Lonely</h3>
            <p>
              Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis
              eu non diam phasellus. Scelerisque felis imperdiet proin fermentum
              leo. Amet volutpat consequat mauris nunc congue.
            </p>
            <div className="social-links">
              <a href="#" className="facebook contact-icon">
                <BsFacebook />
              </a>
              <a href="#" className="instagram contact-icon">
                <BsInstagram />
              </a>
              <a href="#" className="linkedin contact-icon">
                <BsLinkedin />
              </a>
            </div>
          </StyleContactAbout>
        </div>

        <div className="col-lg-3 col-md-4">
          <StyleContactInfo className="info">
            <div className="d-flex align-items-center">
              <BsGeoAlt className="contact-icon" />
              <p>
                A108 Adam Street
                <br />
                New York, NY 535022
              </p>
            </div>

            <div className="d-flex align-items-center mt-4">
              <BsEnvelope className="contact-icon" />
              <p>info@example.com</p>
            </div>

            <div className="d-flex align-items-center mt-4">
              <BsPhone className="contact-icon" />
              <p>+1 5589 55488 55s</p>
            </div>
          </StyleContactInfo>
        </div>

        <div className="col-lg-5 col-md-8">
          <StyleContactForm
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            {/* <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div> */}
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </StyleContactForm>
        </div>
      </div>
    </Section>
  );
};
export default Contact;
