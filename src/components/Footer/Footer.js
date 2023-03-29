import React from "react";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-title">Shortly</div>
      <div className="footer-link">Features</div>
      <div className="footer-features">
        <div>Link Shortening</div>
        <div>Branded Links</div>
        <div>Analytics</div>
      </div>
      <div className="footer-link">Resources</div>
      <div className="footer-resources">
        <div>Blog</div>
        <div>Developers</div>
        <div>Support</div>
      </div>
      <div className="footer-link">Company</div>
      <div className="footer-company">
        <div>About</div>
        <div>Our Team</div>
        <div>Careers</div>
        <div>Contact</div>
      </div>
      <div className="social-icon-container">
        <img src={facebook} alt="facebook-icon" />
        <img src={twitter} alt="twitter-icon" />
        <img src={pinterest} alt="pinterest-icon" />
        <img src={instagram} alt="instagram-icon" />
      </div>
    </section>
  );
};

export default Footer;
