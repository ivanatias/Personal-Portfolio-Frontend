import * as React from "react";
import { Hero, About, Skills, Projects, Contact } from "../container";
import { IndexLayout } from "../layout";
import { Seo } from "../components";
import { useLocation } from "@reach/router";

const Home = () => {
  const { pathname } = useLocation();

  return (
    <IndexLayout>
      <Seo pathname={pathname} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </IndexLayout>
  );
};

export default Home;
