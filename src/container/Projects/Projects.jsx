import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";

import { PageWrapper, MotionWrapper } from "../../wrapper";

import "./projects.scss";

const Projects = () => {
  const data = useStaticQuery(query);

  const {
    allSanityProjects: { nodes: projects },
  } = data;

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const setWorksData = useCallback(() => {
    setWorks(projects);
    setFilterWork(projects);
  }, [projects]);

  useEffect(() => {
    setWorksData();
  }, [setWorksData]);

  const getImageData = (node) => {
    const image = getImage(node.imgUrl.asset);
    return image;
  };

  const handleActiveFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: -100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      setFilterWork(
        item === "All"
          ? works
          : works.filter((work) => work.projectTags.includes(item))
      );
    }, 500);
  };

  return (
    <>
      <h1 className="head-text">
        My <span>Portfolio</span> Section
      </h1>

      <ul className="page__projects-filter">
        {["UI/UX", "Web App", "Mobile App", "All"].map((item, index) => (
          <li
            className="page__flex p-text"
            key={`filter-${item}-${index}`}
            onClick={() => handleActiveFilter(item)}
            style={activeFilter === item ? { backgroundColor: "#404bc9" } : {}}
          >
            {item}
          </li>
        ))}
      </ul>

      <motion.div
        className="page__projects-container page__flex"
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {filterWork.length > 0 ? (
          filterWork.map((work) => (
            <div key={work.id} className="page__projects-item">
              <div className="item-browser">
                <div className="item-browser-dots">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="item-browser-links">
                  <a
                    className="page__flex"
                    href={work.codeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={20} color="white" />
                  </a>
                  <a
                    className="page__flex"
                    href={work.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink size={20} color="white" />
                  </a>
                </div>
              </div>
              <div className="item-imgContainer">
                <GatsbyImage
                  image={getImageData(work)}
                  alt={work.projectTitle}
                  imgClassName="item-img"
                />
              </div>
              <div className="item-content page__flex">
                <div className="item-tag page__flex">
                  <p className="p-text">{work.projectTags[0]}</p>
                </div>
                <h3 className="bold-text">{work.projectTitle}</h3>
              </div>
            </div>
          ))
        ) : (
          <p className="light page__flex">
            No projects with this tag right now.
          </p>
        )}
      </motion.div>
    </>
  );
};

export const query = graphql`
  {
    allSanityProjects {
      nodes {
        id
        projectTitle
        projectTags
        projectLink
        codeLink
        imgUrl {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default PageWrapper(
  MotionWrapper(Projects, "page__projects"),
  "projects",
  "page__primarybg"
);
