import React from "react";
import { links } from "../constants";

const NavDots = ({ isActive }) => {
  return (
    <div className="page__navigation">
      {links.map((link, index) => (
        <a
          className="page__navigation-dot"
          href={`#${link.text}`}
          key={link.text + index}
          style={isActive === link.text ? { backgroundColor: "#404bc9" } : {}}
        />
      ))}
    </div>
  );
};

export default NavDots;
