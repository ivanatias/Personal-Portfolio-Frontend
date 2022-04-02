import React, { useState } from "react";
import "./navbar.scss";
import { links, images } from "../../constants";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="page__navbar">
      <a href="#home" className="page__navbar-logo" onClick={closeMenu}>
        <img src={images.logo} alt="logo" />
      </a>
      <ul className="page__navbar-links">
        {links.map((link) => (
          <li className="page__flex" key={`link-${link.text}`}>
            <div />
            <a className="p-text" href={link.path}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`page__navbar-hamburger ${menuOpen && "active"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`page__navbar-menu page__flex ${menuOpen && "active"}`}>
        {links.map((link) => (
          <li key={link.text}>
            <a className="p-text" href={link.path} onClick={closeMenu}>
              {link.text}
            </a>
          </li>
        ))}

        <div className="page__social-mobileMenu">
          <div>
            <a
              href="https://github.com/ivanatias"
              target="_blank"
              rel="noreferrer"
            >
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
      </ul>
    </nav>
  );
}

export default Navbar;
