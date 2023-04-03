import React from "react";
import { footerAnimate, footerTransition } from "../../Animations";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";
import { motion } from "framer-motion";
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
      <motion.div
        className="footer-container"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        variants={footerAnimate}
      >
        <div className="footer-title">
          <div>Shortly</div>
        </div>
        <div className="footer-links-container">
          {footerContent.map((item, index) => (
            <div className="footer-link" key={index}>
              <motion.div
                whileHover={{ scale: 1.2, cursor: "pointer" }}
                transition={footerTransition}
              >
                {item.title}
              </motion.div>
              <div className="footer-features">
                {item.links.map((link, index2) => (
                  <motion.div
                    key={index + index2}
                    whileHover={{
                      scale: 1.2,
                      cursor: "pointer",
                      color: "#8ce8e8",
                    }}
                    transition={footerTransition}
                  >
                    {link}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="social-icon-container">
          {socialIcons.map((icon, index) => (
            <motion.img
              key={index}
              src={icon}
              alt={`${icon}-icon`}
              whileHover={{ scale: 1.2, cursor: "pointer", color: "#8ce8e8" }}
              transition={footerTransition}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
