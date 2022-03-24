import React, { useState } from "react";
import "./navbar.scss";
import { links, images } from "../../constants";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="page__navbar">
      <a className="page__navbar-logo">
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
            <a className="p-text" href={link.path}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
