import * as React from "react";
import { Hero, About, Skills, Projects, Contact } from "../container";
import { IndexLayout } from "../layout";

const Home = () => {
  return (
    <IndexLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </IndexLayout>
  );
};

export default Home;
