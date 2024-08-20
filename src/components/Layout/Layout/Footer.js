import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// import {} from '../../'
const Footer = () => {
  return (
    <>
      <div className="container" style={{ paddingTop: ".4rem" }}>
        <h4>All rights reserver &copy; sg</h4>
        <div className="footer_text_container">
          <p className="footer_text">
            <Link className="footer_link" to="/about">
              About
            </Link>
          </p>
          |
          <p className="footer_text">
            <Link className="footer_link" to="/about">
              Contact
            </Link>
          </p>
          |
          <p className="footer_text">
            <Link className="footer_link" to="/about">
              PrivacyPolicy
            </Link>
          </p>
          |
        </div>
      </div>
    </>
  );
};

export default Footer;
