import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
// import { IconName } from "react-icons/fc";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <div className="redes">
            <div className="icon-f">
              <FaFacebookSquare className="icon" />
            </div>
            <div className="icon-f">
              <FaTwitter className="icon" />
            </div>
            <div className="icon-f">
              <FaLinkedin className="icon" />
            </div>
          </div>
        </div>
        <div>
          <Nav className="padreLinks">
            <Link to="/">
              <span className="linkFooter">HOME</span>
            </Link>
            <Link to="/Menu">
              <span className="linkFooter">CITIES</span>
            </Link>
          </Nav>
        </div>
        <div className="contacto">
          <h5>Contact</h5>
          <p> MyTineraries@gmail.com</p>
          <p>+54 11 2456 9871</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
