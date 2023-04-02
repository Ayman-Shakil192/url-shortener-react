import React, { useState, useEffect } from "react";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

const transition = {
  duration: 0.3,
  type: "spring",
  stiffness: 300,
  damping: 20,
};

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setShouldAnimate(true);
    }
  }, [inView]);

  return (
    <section className="footer">
      <motion.div
        className="footer-container"
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={
          shouldAnimate
            ? { y: 0, opacity: 1, transition: { duration: 1.5 } }
            : {}
        }
      >
        <div className="footer-title">
          <div>Shortly</div>
        </div>
        <div className="footer-links-container">
          {footerContent.map((item, index) => (
            <div className="footer-link" key={index}>
              <motion.div
                whileHover={{ scale: 1.2, cursor: "pointer" }}
                transition={transition}
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
                    transition={transition}
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
              transition={transition}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
