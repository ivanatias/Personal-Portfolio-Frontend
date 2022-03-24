import React from "react";
import { Navbar } from "../components";
import "./_layout.scss";

const IndexLayout = ({ children, classNames }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
};

export default IndexLayout;
