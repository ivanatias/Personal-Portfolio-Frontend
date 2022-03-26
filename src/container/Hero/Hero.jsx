import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { images } from "../../constants";
import { motion } from "framer-motion";

import { PageWrapper } from "../../wrapper";

import "./hero.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="page__hero page__flex">
      <motion.div
        className="page__hero-intro"
        whileInView={{ x: [-120, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="page__hero-badges">
          <div className="badge-greeting page__flex">
            <span>👋</span>
            <div>
              <p className="p-text">Hello, I'm</p>
              <h3 className="bold-text">Ivan</h3>
            </div>
          </div>
          <div className="badge-occupations page__flex">
            <p className="p-text">Frontend Dev</p>
            <p className="p-text">UI Designer</p>
            <p className="p-text">Marketer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="page__hero-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <StaticImage
          src="../../images/profile.png"
          alt="Ivan Atias"
          placeholder="blurred"
          imgClassName="hero-img"
        />
        <motion.img
          src={images.circle}
          alt="circle"
          className="hero-circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        className="page__hero-circles page__flex"
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        <div className="hero-skills">
          {[images.react, images.gatsby, images.sass].map((circle, index) => (
            <div
              className="hero-skills-circles page__flex"
              key={`circle-${index}`}
            >
              <img src={circle} alt="skill" />
            </div>
          ))}
        </div>
        <a href="#contact" className="p-text dark page__flex">
          Contact me!
        </a>
      </motion.div>
    </section>
  );
};

export default PageWrapper(Hero, "home");
