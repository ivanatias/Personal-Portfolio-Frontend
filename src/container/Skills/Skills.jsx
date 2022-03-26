import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

import { PageWrapper } from "../../wrapper";

import "./skills.scss";

const Skills = () => {
  const data = useStaticQuery(query);

  const {
    allSanitySkills: { nodes: skills },
  } = data;

  const {
    allSanityExperiences: { nodes: experiences },
  } = data;

  console.log(experiences);

  return (
    <>
      <h1 className="head-text">Skills and Experience</h1>
      <article className="page__skills-container">
        <motion.div
          className="page__skills-items"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="skill page__flex"
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="p-text light">{skill.skill}</p>
              <div className="skill-img page__flex">
                <img src={skill.imgUrl.asset.url} alt={skill.skill} />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="page__skills-experiences">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="experience"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="experience-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <div className="experience-desc">
                <h4 className="bold-text">{experience.role}</h4>
                <p className="p-text">{experience.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </article>
    </>
  );
};

export const query = graphql`
  {
    allSanitySkills {
      nodes {
        id
        skill
        imgUrl {
          asset {
            url
          }
        }
      }
    }
    allSanityExperiences {
      nodes {
        id
        year
        company
        role
      }
    }
  }
`;

export default PageWrapper(Skills, "skills", "page__primarybg");
