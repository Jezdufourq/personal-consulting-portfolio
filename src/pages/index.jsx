import React from "react";

import SEO from "../components/seo";
import Header from "../components/header";
import Greeting from "../components/greeting";
import Skills from "../components/skills";
import Cards from "../components/cards";
import Projects from "../components/projects";

function IndexPage() {
  return (
    <div>
      <SEO
        keywords={[
          `consulting`,
          `webdevelopment`,
          `react`,
          `vue`,
          `jezdufourq`,
        ]}
        title="Home"
      />
      <Header />
      <Greeting />
      {/* <Skills /> */}
      <Projects />
    </div>
  );
}

export default IndexPage;
