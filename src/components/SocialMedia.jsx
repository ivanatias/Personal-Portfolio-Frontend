import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="page__social">
      <div>
        <a href="https://github.com/ivanatias" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://instagram.com/ivanatias"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
