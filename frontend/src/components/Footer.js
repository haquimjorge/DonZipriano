import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
// import { IconName } from "react-icons/fc";

const Footer = () => {
  return (
    <>
      <svg
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(255, 255, 255, 1)" offset="0%"></stop>
            <stop stopColor="rgba(255, 255, 255, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "1" }}
          fill="url(#sw-gradient-0)"
          d="M0,80L16,68.3C32,57,64,33,96,31.7C128,30,160,50,192,56.7C224,63,256,57,288,46.7C320,37,352,23,384,20C416,17,448,23,480,36.7C512,50,544,70,576,65C608,60,640,30,672,21.7C704,13,736,27,768,36.7C800,47,832,53,864,46.7C896,40,928,20,960,18.3C992,17,1024,33,1056,33.3C1088,33,1120,17,1152,13.3C1184,10,1216,20,1248,33.3C1280,47,1312,63,1344,65C1376,67,1408,53,1440,51.7C1472,50,1504,60,1536,66.7C1568,73,1600,77,1632,76.7C1664,77,1696,73,1728,63.3C1760,53,1792,37,1824,36.7C1856,37,1888,53,1920,58.3C1952,63,1984,57,2016,51.7C2048,47,2080,43,2112,36.7C2144,30,2176,20,2208,13.3C2240,7,2272,3,2288,1.7L2304,0L2304,100L2288,100C2272,100,2240,100,2208,100C2176,100,2144,100,2112,100C2080,100,2048,100,2016,100C1984,100,1952,100,1920,100C1888,100,1856,100,1824,100C1792,100,1760,100,1728,100C1696,100,1664,100,1632,100C1600,100,1568,100,1536,100C1504,100,1472,100,1440,100C1408,100,1376,100,1344,100C1312,100,1280,100,1248,100C1216,100,1184,100,1152,100C1120,100,1088,100,1056,100C1024,100,992,100,960,100C928,100,896,100,864,100C832,100,800,100,768,100C736,100,704,100,672,100C640,100,608,100,576,100C544,100,512,100,480,100C448,100,416,100,384,100C352,100,320,100,288,100C256,100,224,100,192,100C160,100,128,100,96,100C64,100,32,100,16,100L0,100Z"
        ></path>
      </svg>
      <footer>
        <div className="footer-container">
          <div className="footer-nav">
            <ul>
              <li>
                <NavLink
                  style={{ color: "#ba0909", textDecoration: "none" }}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ba0909", textDecoration: "none" }}
                  to="/menu"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ba0909", textDecoration: "none" }}
                  to="/reservas"
                >
                  Reservas
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ba0909", textDecoration: "none" }}
                  to="/Eventos"
                >
                  Contacto
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ba0909", textDecoration: "none" }}
                  to="/nosotros"
                >
                  Nosotros
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-integrantes ">
            <p>
              Don Zipriano &copy; Micaela Zampone - Kevin Von Hausen - Gabriel
              Cejas - Jorge Haquim - Esteban Maldonado - Marcelo Labraña - Pedro
              Guemes
            </p>
          </div>

          <div className="redes">
            <div className="icon-f">
              <a
                target="_blank"
                rel="noreferrer"
                rel="noopener"
                href={"https://www.facebook.com"}
              >
                <FaFacebookSquare className="icon" />
              </a>
            </div>
            <div className="icon-f">
              <a
                target="_blank"
                rel="noreferrer"
                rel="noopener"
                href={"https://www.twitter.com"}
              >
                <FaTwitter className="icon" />
              </a>
            </div>
            <div className="icon-f">
              <a
                target="_blank"
                rel="noreferrer"
                rel="noopener"
                href={"https://www.linkedin.com"}
              >
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-map">
          <iframe
<<<<<<< HEAD
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.8109431117177!2d-58.40195068477083!3d-34.58364998046472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9e0e97a297%3A0xd5316c35130d25df!2sJos%C3%A9%20Le%C3%B3n%20Pagano%202697%2C%20C1425%20AOA%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1640796368972!5m2!1ses!2sar"
=======
          title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.319888104349!2d-58.367169184650294!3d-34.621355665938815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb96756ef42b%3A0xe81b5b162482c0cf!2sMindHub!5e0!3m2!1ses-419!2sar!4v1640796919692!5m2!1ses-419!2sar"
>>>>>>> 0db781a3c882be8ce1e0f24de32ff77ce9ffe640
            width="400"
            height="450"
            style={{border:"0"}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </footer>
    </>
  );
};
export default Footer;
