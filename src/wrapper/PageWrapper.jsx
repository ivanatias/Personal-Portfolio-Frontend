import React from "react";
import { NavDots, SocialMedia } from "../components";

const PageWrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <section id={idName} className={`page__container ${classNames}`}>
        <SocialMedia />
        <div className="page__wrapper page__flex">
          <Component />

          <div className="copyright">
            <p className="p-text light">@2022 Ivan Atias</p>
            <p className="p-text light">All rights reserved</p>
            <p className="p-text light">Powered by Gatsby</p>
          </div>
        </div>
        <NavDots isActive={idName} />
      </section>
    );
  };

export default PageWrapper;
