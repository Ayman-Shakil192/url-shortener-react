import React from "react";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";
import "./Footer.css";

const socialIcons = [facebook, twitter, pinterest, instagram];
const footerContent = [
  {
    title: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-title">
          <div>Shortly</div>
        </div>
        <div className="footer-links-container">
          {footerContent.map((item, index) => (
            <div className="footer-link" key={index}>
              <div>{item.title}</div>
              <div className="footer-features">
                {item.links.map((link, index) => (
                  <div key={index}>{link}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="social-icon-container">
          {socialIcons.map((icon, index) => (
            <img key={index} src={icon} alt={`${icon}-icon`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
