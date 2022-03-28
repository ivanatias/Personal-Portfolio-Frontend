import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../../constants";

import { PageWrapper, MotionWrapper } from "../../wrapper";

import "./about.scss";

const About = () => {
  const [servicesIndex, setServicesIndex] = useState(0);

  const alternateServices = () => {
    setServicesIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      alternateServices();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="head-text">
        Developing, designing and creating <br /> <span>good stuff</span>
      </h1>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="page__about-service page__flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          key={services[servicesIndex].id}
        >
          <div
            className="service-item page__flex"
            style={{
              backgroundImage: `url(${services[servicesIndex].img})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="service-container page__flex">
              <div className="service-desc">
                <div className="page__flex">{services[servicesIndex].icon}</div>
                <h1>{services[servicesIndex].title}</h1>
                <p>{services[servicesIndex].desc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper(
  MotionWrapper(About, "page__about"),
  "about",
  "page__primarybg"
);
